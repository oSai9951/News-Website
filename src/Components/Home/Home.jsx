
import Categories from './Category/Categories'
import Form from './Form/Form'
import Hero from './Hero/Hero'
 import HeadlineNews from './Headline/HeadlineNews'



const Home = () => {
  
  return (
    <>
<section style={{overflowX: 'hidden'}}>
<Hero/>

<Categories/>

<HeadlineNews/>


<Form/>
</section>

    </>
  )
}

export default Home