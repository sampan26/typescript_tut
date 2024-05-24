import { Name } from './Person.types'

type PersonList = {
    names: Name[]
}

export const PersonList = (props: PersonList) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                <h2>{name.first} {name.last}</h2>
                )
            })}
        </div>
    )
}