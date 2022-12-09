import star from "../img/star.png"
import arrow from "../img/arrow.png"
import Project from "../components/Project"

function Design(){
    return(
        <div>
            <div class="mx-[200px] mt-[100px]">
                <div class="flex">
                    <img class="h-[225px] w-[221px] mr-[86px] animate-spin-slow" src={star} alt=""/>
                    <div class="mt-[26px] w-[423px]">
                        <label class="text-[30px]">Eu acredito em um mundo tecnológico mais humano, compreensivo, <br /> inovador & <br /> criativo.</label>
                        <br />
                        <br />
                        <b class="  text-[30px]">Arrasta pra baixo e vem ver meu trabalho ;)</b>
                    </div>
                </div>
                <img class="animate-wiggle fixed left-3/4 top-[400px]" src={arrow} alt="" />

                <div class='flex'>
                    <div class='mt-[288px] mr-[58px]'>
                        <Project title='Project 1' date='Dev/9999' src="https://i.ytimg.com/vi/2CFDQKVj3mg/maxresdefault.jpg" width='542px' height='703px'/>
                    </div>
                    <div class='mt-[576px]'>
                        <Project title='Project 2' date='Dev/9999' src="https://jsdp.enslaved.org/assets/images/nature-placeholder-2.jpg" width='542px' height='703px'/>
                    </div>
                </div>

                <div class='mt-[78px]'>
                    <Project title='Project 3' date='Dev/9999' src="https://i.ytimg.com/vi/1qfYWDEMSf4/maxresdefault.jpg" width='100%' height='442px'/>
                </div>

                <div class='flex justify-between mt-[78px] mb-[58px]'>
                    <div class='mr-[58px]'><Project title='Project 4' date='Dev/9999' src="https://img.freepik.com/premium-photo/colorful-futuristic-city-concept-art-illustration_708558-88.jpg?w=2000" width='100%' height='442px'/></div>
                    <Project title='Project 5   ' date='Dev/9999' src="https://img5.goodfon.com/wallpaper/nbig/f/87/tsvet-ochki-stil-fantasy-style-color-fantastika-fiction-il-2.jpg" width='100%' height='442px'/>
                </div>

            </div>

            <div class='position-sticky pt-[153px] bg-black pb-[159px]'>
                <div class='mx-[200px]'>
                    <b class='flex justify-center text-projectwhite text-[30px]'>Direto do arquivo</b>
                    <label class='flex justify-center mt-[14px] text-projectwhite text-[30px]'>Alguns dos projetos anteriores que ficaram para dar aquela nostalgia.</label>
                </div>

                <div class='mt-[94px] mx-[200px]'>
                    <div class='flex justify-between text-projectwhite'>
                        <div class='mr-[36px]'> <Project title='Project 1' date='Dev/9999' width='542px' height='219px' src='https://agorarn.com.br/files/uploads/2019/05/Shopping-MIDWAY-MALL-4.jpg' /> </div>
                        <Project title='Project 2' date='Dev/9999' width='542px' height='219px' src='https://i0.wp.com/post-italy.com/wp-content/uploads/2021/01/curiosidades-dante-alighieri.png?fit=1100%2C500&ssl=1' />
                    </div>

                    <div class='text-projectwhite mt-[78px] flex justify-between'>
                        <div class='mr-[36px]'> <Project title='Project 3' date='Dev/9999' width='542px' height='219px' src='https://www.8milimetros.com.br/wp-content/uploads/2019/09/como-filmar-na-golden-hour.jpg' /> </div>
                        <Project title='Project 4' date='Dev/9999' width='542px' height='219px' src='https://www.perkypet.com/media/Articles/Perky-Pet/All-About-Squirrel-Nests.jpg ' />
                    </div>
                </div> 

                <div class='mx-[200px] mt-[120px]'>
                    <b class='flex justify-center text-projectwhite text-[30px]'>Áreas de interesse</b>
                    <label class='flex justify-center mt-[14px] text-projectwhite text-[30px]'>Alguns dos projetos anteriores que ficaram para dar aquela nostalgia.</label>
                </div>

                <div class='mt-[94px] mx-[200px] text-projectwhite'>
                    <div class='flex justify-between'>
                        <div class='mr-[36px]'> <Project title='Project 1' date='Dev/9999' width='542px' height='219px' src='https://s2.glbimg.com/qZcISxP3sHDRZRvVkAWxbydxQUE=/461x152:1852x1126/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/S/d/bB0GUXQQecTCFkl18ELQ/ladygaga1.jpeg' /> </div>
                        <Project title='Project 2' date='Dev/9999' width='542px' height='219px' src='https://www.logsign.com/uploads/ensuring_network_security_e34d6ce4bb.png' />
                    </div>

                    <div class='mt-[78px] flex justify-between'>
                        <div class='mr-[36px]'> <Project title='Project 3' date='Dev/9999' width='542px' height='219px' src='https://assets.gamepur.com/wp-content/uploads/2020/11/24215041/minecraft-rtx-2-F.jpg' /> </div>
                        <Project title='Project 4' date='Dev/9999' width='542px' height='219px' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/female-runner-running-at-summer-park-trail-healthy-royalty-free-image-1591373138.jpg' />
                    </div>

                    <div class='flex justify-center mt-[55px]'>
                        <Project title='Project 5' date='Dev/9999' width='542px' height='219px' src='https://ichef.bbci.co.uk/news/640/cpsprodpb/28FD/production/_116839401_gettyimages-467354336.jpg' />
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Design