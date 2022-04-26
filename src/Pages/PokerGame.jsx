// board
import { Component } from 'react'
import Board_Style from './PokerGame.module.css'
import Commands from './Commands/Commands'

export default class PokerGame extends Component {

    render() {
        return (
            <>
                <div className={Board_Style.edges_Black} id='border_0'>
                    <div className={Board_Style.edges_Brown} id='border_1'>
                        <div className={Board_Style.board}>

                            <Commands />

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
