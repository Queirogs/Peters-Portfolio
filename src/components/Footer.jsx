import { Link } from 'react-router-dom'

function Footer(){
    return(
        <div class="h-[319px] bg-projectblue footer footer-center w-full">
            <div class='flex justify-center pt-[92px] text-[18px]'>
                <label class="mr-[18px]"><Link to="/design">Design</Link></label>
                <label class='mr-[18px]'>·</label>
                <label class="mr-[18px]"><Link to="/about">Sobre</Link></label>
                <label class='mr-[18px]'>·</label>
                <label class="mr-[18px]"><Link to="/contact">Contato</Link></label>
                <label class='mr-[18px]'>·</label>
                <label class=""><Link to="/resume">Resumo</Link></label>
            </div>

            <label class='mt-[79px] flex justify-center text-[14px]'>Copyright © 2022 Pedro Alighieri. Made by two best friends.</label>
        </div>
    )
}

export default Footer