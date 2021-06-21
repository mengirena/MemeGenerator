import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            favoriteImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
    
    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }

    handleClick(){
        this.setState({
            favoriteImg:this.state.randomImg
        })
    }
    
    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <div className="pre">
                        <span>This !</span>
                        <img src={this.state.favoriteImg} alt=""/>
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>
                    </div>
                    <div className="aft">
                        <span>Generate to compare</span>
                        <button onClick={this.handleClick}>Save to This!</button>
                        <img src={this.state.randomImg} alt=""/>
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default MemeGenerator