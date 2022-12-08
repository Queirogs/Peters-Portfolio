import logo from '../img/logo.svg'
import { Link } from 'react-router-dom'

function Header (){
    return (
        <div class="bg-white h-[120px] mt-[73px] py-[28px] flex justify-between">
            <img class="ml-[200px]" src={logo} /> 
            <div class="flex self-center mr-[200px] text-[18px] font-albert">
                <label class="mr-[36px]"><Link to="/design">Design</Link></label>
                <label class="mr-[36px]"><Link to="/about">Sobre</Link></label>
                <label class="mr-[36px]"><Link to="/contact">Contato</Link></label>
                <label class=""><Link to="/resume">Resumo</Link></label>
            </div>
        </div>
        
    )
}

export default Header