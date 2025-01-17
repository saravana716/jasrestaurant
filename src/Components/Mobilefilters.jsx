import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../Assets/Poke DEMO/focus-06-1024x683.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../Components/styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
const Mobilefilters = () => {
  return (
    <div className="mydata">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: false,
        }}
        autoplay={{
          delay: 3000, // Slide changes every 3 seconds (3000ms)
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="im">
            <div className="imtext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                praesentium molestias vero eaque quo cupiditate illum reiciendis
                voluptatibus. Atque eveniet sit repellat, perspiciatis
                perferendis ullam doloremque nisi qui, quas dignissimos quidem
                rerum labore maxime ratione dolor et ab tenetur vel quos itaque.
                Accusamus ad eos quis voluptates veritatis? Neque debitis nulla,
                repellendus dolorum nemo quidem officiis molestias atque ut
                deleniti obcaecati id repudiandae inventore maiores
                perspiciatis, in asperiores quibusdam soluta enim, dicta
                doloribus ipsa fugit! Quos nemo voluptas molestiae similique
                provident cumque eum dolor sapiente, necessitatibus sit magnam
                dolorum odio quibusdam voluptates quo. Hic fugit, optio numquam
                sed quibusdam sit!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="im">
            <div className="imtext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                praesentium molestias vero eaque quo cupiditate illum reiciendis
                voluptatibus. Atque eveniet sit repellat, perspiciatis
                perferendis ullam doloremque nisi qui, quas dignissimos quidem
                rerum labore maxime ratione dolor et ab tenetur vel quos itaque.
                Accusamus ad eos quis voluptates veritatis? Neque debitis nulla,
                repellendus dolorum nemo quidem officiis molestias atque ut
                deleniti obcaecati id repudiandae inventore maiores
                perspiciatis, in asperiores quibusdam soluta enim, dicta
                doloribus ipsa fugit! Quos nemo voluptas molestiae similique
                provident cumque eum dolor sapiente, necessitatibus sit magnam
                dolorum odio quibusdam voluptates quo. Hic fugit, optio numquam
                sed quibusdam sit!
              </p>
            </div>
          </div>
        </SwiperSlide>   <SwiperSlide>
          <div className="im">
            <div className="imtext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                praesentium molestias vero eaque quo cupiditate illum reiciendis
                voluptatibus. Atque eveniet sit repellat, perspiciatis
                perferendis ullam doloremque nisi qui, quas dignissimos quidem
                rerum labore maxime ratione dolor et ab tenetur vel quos itaque.
                Accusamus ad eos quis voluptates veritatis? Neque debitis nulla,
                repellendus dolorum nemo quidem officiis molestias atque ut
                deleniti obcaecati id repudiandae inventore maiores
                perspiciatis, in asperiores quibusdam soluta enim, dicta
                doloribus ipsa fugit! Quos nemo voluptas molestiae similique
                provident cumque eum dolor sapiente, necessitatibus sit magnam
                dolorum odio quibusdam voluptates quo. Hic fugit, optio numquam
                sed quibusdam sit!
              </p>
            </div>
          </div>
        </SwiperSlide>   <SwiperSlide>
          <div className="im">
            <div className="imtext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                praesentium molestias vero eaque quo cupiditate illum reiciendis
                voluptatibus. Atque eveniet sit repellat, perspiciatis
                perferendis ullam doloremque nisi qui, quas dignissimos quidem
                rerum labore maxime ratione dolor et ab tenetur vel quos itaque.
                Accusamus ad eos quis voluptates veritatis? Neque debitis nulla,
                repellendus dolorum nemo quidem officiis molestias atque ut
                deleniti obcaecati id repudiandae inventore maiores
                perspiciatis, in asperiores quibusdam soluta enim, dicta
                doloribus ipsa fugit! Quos nemo voluptas molestiae similique
                provident cumque eum dolor sapiente, necessitatibus sit magnam
                dolorum odio quibusdam voluptates quo. Hic fugit, optio numquam
                sed quibusdam sit!
              </p>
            </div>
          </div>
        </SwiperSlide>   <SwiperSlide>
          <div className="im">
            <div className="imtext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                praesentium molestias vero eaque quo cupiditate illum reiciendis
                voluptatibus. Atque eveniet sit repellat, perspiciatis
                perferendis ullam doloremque nisi qui, quas dignissimos quidem
                rerum labore maxime ratione dolor et ab tenetur vel quos itaque.
                Accusamus ad eos quis voluptates veritatis? Neque debitis nulla,
                repellendus dolorum nemo quidem officiis molestias atque ut
                deleniti obcaecati id repudiandae inventore maiores
                perspiciatis, in asperiores quibusdam soluta enim, dicta
                doloribus ipsa fugit! Quos nemo voluptas molestiae similique
                provident cumque eum dolor sapiente, necessitatibus sit magnam
                dolorum odio quibusdam voluptates quo. Hic fugit, optio numquam
                sed quibusdam sit!
              </p>
            </div>
          </div>
        </SwiperSlide>   <SwiperSlide>
          <div className="im">
            <div className="imtext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                praesentium molestias vero eaque quo cupiditate illum reiciendis
                voluptatibus. Atque eveniet sit repellat, perspiciatis
                perferendis ullam doloremque nisi qui, quas dignissimos quidem
                rerum labore maxime ratione dolor et ab tenetur vel quos itaque.
                Accusamus ad eos quis voluptates veritatis? Neque debitis nulla,
                repellendus dolorum nemo quidem officiis molestias atque ut
                deleniti obcaecati id repudiandae inventore maiores
                perspiciatis, in asperiores quibusdam soluta enim, dicta
                doloribus ipsa fugit! Quos nemo voluptas molestiae similique
                provident cumque eum dolor sapiente, necessitatibus sit magnam
                dolorum odio quibusdam voluptates quo. Hic fugit, optio numquam
                sed quibusdam sit!
              </p>
            </div>
          </div>
        </SwiperSlide>   <SwiperSlide>
          <div className="im">
            <div className="imtext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                praesentium molestias vero eaque quo cupiditate illum reiciendis
                voluptatibus. Atque eveniet sit repellat, perspiciatis
                perferendis ullam doloremque nisi qui, quas dignissimos quidem
                rerum labore maxime ratione dolor et ab tenetur vel quos itaque.
                Accusamus ad eos quis voluptates veritatis? Neque debitis nulla,
                repellendus dolorum nemo quidem officiis molestias atque ut
                deleniti obcaecati id repudiandae inventore maiores
                perspiciatis, in asperiores quibusdam soluta enim, dicta
                doloribus ipsa fugit! Quos nemo voluptas molestiae similique
                provident cumque eum dolor sapiente, necessitatibus sit magnam
                dolorum odio quibusdam voluptates quo. Hic fugit, optio numquam
                sed quibusdam sit!
              </p>
            </div>
          </div>
        </SwiperSlide>   <SwiperSlide>
          <div className="im">
            <div className="imtext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                praesentium molestias vero eaque quo cupiditate illum reiciendis
                voluptatibus. Atque eveniet sit repellat, perspiciatis
                perferendis ullam doloremque nisi qui, quas dignissimos quidem
                rerum labore maxime ratione dolor et ab tenetur vel quos itaque.
                Accusamus ad eos quis voluptates veritatis? Neque debitis nulla,
                repellendus dolorum nemo quidem officiis molestias atque ut
                deleniti obcaecati id repudiandae inventore maiores
                perspiciatis, in asperiores quibusdam soluta enim, dicta
                doloribus ipsa fugit! Quos nemo voluptas molestiae similique
                provident cumque eum dolor sapiente, necessitatibus sit magnam
                dolorum odio quibusdam voluptates quo. Hic fugit, optio numquam
                sed quibusdam sit!
              </p>
            </div>
          </div>
        </SwiperSlide>   <SwiperSlide>
          <div className="im">
            <div className="imtext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                praesentium molestias vero eaque quo cupiditate illum reiciendis
                voluptatibus. Atque eveniet sit repellat, perspiciatis
                perferendis ullam doloremque nisi qui, quas dignissimos quidem
                rerum labore maxime ratione dolor et ab tenetur vel quos itaque.
                Accusamus ad eos quis voluptates veritatis? Neque debitis nulla,
                repellendus dolorum nemo quidem officiis molestias atque ut
                deleniti obcaecati id repudiandae inventore maiores
                perspiciatis, in asperiores quibusdam soluta enim, dicta
                doloribus ipsa fugit! Quos nemo voluptas molestiae similique
                provident cumque eum dolor sapiente, necessitatibus sit magnam
                dolorum odio quibusdam voluptates quo. Hic fugit, optio numquam
                sed quibusdam sit!
              </p>
            </div>
          </div>
        </SwiperSlide>   <SwiperSlide>
          <div className="im">
            <div className="imtext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                praesentium molestias vero eaque quo cupiditate illum reiciendis
                voluptatibus. Atque eveniet sit repellat, perspiciatis
                perferendis ullam doloremque nisi qui, quas dignissimos quidem
                rerum labore maxime ratione dolor et ab tenetur vel quos itaque.
                Accusamus ad eos quis voluptates veritatis? Neque debitis nulla,
                repellendus dolorum nemo quidem officiis molestias atque ut
                deleniti obcaecati id repudiandae inventore maiores
                perspiciatis, in asperiores quibusdam soluta enim, dicta
                doloribus ipsa fugit! Quos nemo voluptas molestiae similique
                provident cumque eum dolor sapiente, necessitatibus sit magnam
                dolorum odio quibusdam voluptates quo. Hic fugit, optio numquam
                sed quibusdam sit!
              </p>
            </div>
          </div>
        </SwiperSlide>   <SwiperSlide>
          <div className="im">
            <div className="imtext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                praesentium molestias vero eaque quo cupiditate illum reiciendis
                voluptatibus. Atque eveniet sit repellat, perspiciatis
                perferendis ullam doloremque nisi qui, quas dignissimos quidem
                rerum labore maxime ratione dolor et ab tenetur vel quos itaque.
                Accusamus ad eos quis voluptates veritatis? Neque debitis nulla,
                repellendus dolorum nemo quidem officiis molestias atque ut
                deleniti obcaecati id repudiandae inventore maiores
                perspiciatis, in asperiores quibusdam soluta enim, dicta
                doloribus ipsa fugit! Quos nemo voluptas molestiae similique
                provident cumque eum dolor sapiente, necessitatibus sit magnam
                dolorum odio quibusdam voluptates quo. Hic fugit, optio numquam
                sed quibusdam sit!
              </p>
            </div>
          </div>
        </SwiperSlide>   <SwiperSlide>
          <div className="im">
            <div className="imtext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                praesentium molestias vero eaque quo cupiditate illum reiciendis
                voluptatibus. Atque eveniet sit repellat, perspiciatis
                perferendis ullam doloremque nisi qui, quas dignissimos quidem
                rerum labore maxime ratione dolor et ab tenetur vel quos itaque.
                Accusamus ad eos quis voluptates veritatis? Neque debitis nulla,
                repellendus dolorum nemo quidem officiis molestias atque ut
                deleniti obcaecati id repudiandae inventore maiores
                perspiciatis, in asperiores quibusdam soluta enim, dicta
                doloribus ipsa fugit! Quos nemo voluptas molestiae similique
                provident cumque eum dolor sapiente, necessitatibus sit magnam
                dolorum odio quibusdam voluptates quo. Hic fugit, optio numquam
                sed quibusdam sit!
              </p>
            </div>
          </div>
        </SwiperSlide>   <SwiperSlide>
          <div className="im">
            <div className="imtext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                praesentium molestias vero eaque quo cupiditate illum reiciendis
                voluptatibus. Atque eveniet sit repellat, perspiciatis
                perferendis ullam doloremque nisi qui, quas dignissimos quidem
                rerum labore maxime ratione dolor et ab tenetur vel quos itaque.
                Accusamus ad eos quis voluptates veritatis? Neque debitis nulla,
                repellendus dolorum nemo quidem officiis molestias atque ut
                deleniti obcaecati id repudiandae inventore maiores
                perspiciatis, in asperiores quibusdam soluta enim, dicta
                doloribus ipsa fugit! Quos nemo voluptas molestiae similique
                provident cumque eum dolor sapiente, necessitatibus sit magnam
                dolorum odio quibusdam voluptates quo. Hic fugit, optio numquam
                sed quibusdam sit!
              </p>
            </div>
          </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
};

export default Mobilefilters;
