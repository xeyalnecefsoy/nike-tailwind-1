import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img src={offer} width={773} height={687} className="object-contain w-full " />
      </div>
      <div className="flex flex-1 flex-col">
      
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
        <span className="text-coral-red">Özəl </span>Təklif
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eum quia cumque blanditiis. Aliquid qui vel nesciunt explicabo? Eveniet, aspernatur facilis. Maiores laborum mollitia qui repudiandae, nisi sint numquam voluptates.</p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae tempora laboriosam voluptate cum non consequatur atque dignissimos similique deserunt, ex ea incidunt culpa cupiditate, dolore enim optio, doloremque nobis.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="İndi al" iconURL={arrowRight}/>
          <Button label="Ətraflı öyrən"
          backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer