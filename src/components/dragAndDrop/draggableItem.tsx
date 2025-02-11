import { useDrag } from 'react-dnd'
import { DragedItem } from './dragAndDrop'

const DraggableItem: React.FC<{ item: DragedItem }> = ({ item }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'ITEM',
        item,
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    return (
        <div ref={dragRef} style={item.style} key={item.id}>
            {item.text}
        </div>
    )
}

export { DraggableItem }
