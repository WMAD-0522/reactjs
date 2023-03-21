import "./Die.css"

const Die = (props) => {

    const styles = {
        color: props.isHeld ? "#FFF" : "#000",
        backgroundColor: props.isHeld ? "#59E391" : "#FFF"
    }
    
    return (
        <div className="die-face" style={styles} onClick={props.holdDice}>
            <h2 className="die-face--num">{props.value}</h2>
        </div>
    );
}

export default Die;