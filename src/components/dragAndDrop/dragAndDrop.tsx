import css from './draAndDrop.module.css'
import React, { useEffect, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { DraggableItem } from './draggableItem'

export type DragedItem = {
    id: string
    style: React.CSSProperties
    text: string
}

const DragAndDrop: React.FC = () => {
    const [dropZoneItems, setDropZoneItems] = useState<DragedItem[]>([])
    const [sourceItems, setSourceItems] = useState<DragedItem[]>([
        {
            id: 'item1',
            style: {
                width: '100px',
                height: '100px',
                backgroundColor: 'purple',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            text: 'drag me',
        },
        {
            id: 'item2',
            style: {
                width: '100px',
                height: '100px',
                backgroundColor: 'red',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            text: 'drag me too',
        },
    ])
    useEffect(() => {
        console.log(dropZoneItems)
    }, [dropZoneItems])
    const [{ isOver, canDrop }, dropRef] = useDrop({
        accept: 'ITEM',
        drop: (item: DragedItem, monitor) => {
            const clientOffset = monitor.getClientOffset()
            const dropZoneRect = document
                .getElementById('dropZone')
                ?.getBoundingClientRect()

            const styles = window.getComputedStyle(
                document.getElementById('dropZone') as Element
            )

            const gap = parseFloat(styles.getPropertyValue('gap')) || 0

            const gridSize = 5

            if (!dropZoneRect) return
            if (!clientOffset) return

            const totalWidth = dropZoneRect.width - gap * (gridSize - 1)
            const totalHeight = dropZoneRect.height - gap * (gridSize - 1)

            const cellWidth = totalWidth / gridSize
            const cellHeight = totalHeight / gridSize

            const clickX = clientOffset.x - dropZoneRect.left
            const clickY = clientOffset.y - dropZoneRect.top

            const column = Math.min(
                Math.floor(clickX / (cellWidth + gap)),
                gridSize - 1
            )
            const row = Math.min(
                Math.floor(clickY / (cellHeight + gap)),
                gridSize - 1
            )

            setDropZoneItems(prev => {
                const existingItem = prev.find(i => i.id === item.id)

                if (existingItem) {
                    return prev.map(i => {
                        return i.id === item.id
                            ? {
                                  ...i,
                                  style: {
                                      ...i.style,
                                      gridColumn: column + 1,
                                      gridRow: row + 1,
                                  },
                              }
                            : i
                    })
                }
                return [
                    ...prev,
                    {
                        ...item,
                        style: {
                            ...item.style,
                            width: '100%',
                            height: '100%',
                            gridColumn: column + 1,
                            gridRow: row + 1,
                        },
                    },
                ]
            })

            // setDropZoneItems(prev => [
            //     ...prev,
            //     {
            //         ...item,
            //         style: {
            //             ...item.style,
            //             width: '100%',
            //             height: '100%',
            //             gridColumn: column + 1,
            //             gridRow: row + 1,
            //         },
            //     },
            // ])
            setSourceItems(prev => prev.filter(i => i.id !== item.id))
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    // const handleClick = (e: React.MouseEvent) => {
    //     const dropZone = document.getElementById('dropZone')
    //     if (!dropZone) return

    //     const rect = dropZone.getBoundingClientRect()
    //     console.log('DropZone Rect:', rect) // Проверяем размеры dropZone

    //     const gridSize = 5 // 5x5 сетка
    //     const style = window.getComputedStyle(dropZone)
    //     const gap = parseFloat(style.getPropertyValue('gap')) || 0

    //     const totalWidth = rect.width - gap * (gridSize - 1)
    //     console.log('total Width: ', totalWidth)

    //     const totalHeight = rect.height - gap * (gridSize - 1)
    //     console.log('totalHeight: ', totalHeight)

    //     const cellWidth = totalWidth / gridSize
    //     console.log('cellWidth: ', cellWidth)

    //     const cellHeight = totalHeight / gridSize
    //     console.log('cellHeight: ', cellHeight)

    //     const clickX = e.clientX - rect.left
    //     console.log('clien X: ', e.clientX)

    //     const clickY = e.clientY - rect.top
    //     console.log('client Y: ', e.clientY)

    //     console.log(`ClickX: ${clickX}, ClickY: ${clickY}`) // Проверяем координаты клика

    //     const col = Math.min(
    //         Math.floor(clickX / (cellWidth + gap)),
    //         gridSize - 1
    //     )
    //     const row = Math.min(
    //         Math.floor(clickY / (cellHeight + gap)),
    //         gridSize - 1
    //     )

    //     console.log(`Row: ${row}, Column: ${col}`)
    // }

    return (
        <>
            <div className={css.sourceItemsZone}>
                {sourceItems.map(item => {
                    return <DraggableItem key={item.id} item={item} />
                })}
            </div>
            <div
                ref={dropRef}
                id='dropZone'
                className={css.dropZone}
                // onClick={e => handleClick(e)}
            >
                {Array.from({ length: 25 }).map((item, index) => {
                    return <div key={index} className={css.dropZoneItem}></div>
                })}
                {dropZoneItems.map(item => {
                    return <DraggableItem key={item.id} item={item} />
                    // return (
                    //     <div style={item.style} key={item.id}>
                    //         {item.text}
                    //     </div>
                    // )
                })}
            </div>
        </>
    )
}

export { DragAndDrop }
