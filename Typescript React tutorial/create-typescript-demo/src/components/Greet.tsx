type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props:GreetProps) => {
    const {messageCount=0} = props
    return (
        <div>
            <h2>
            {props.isLoggedIn
            ? 'Welcome to my {props.name}! Typescript {props.messageCount}' 
        : 'Welcome Guest'}
        </h2>
        </div>
    )
}
