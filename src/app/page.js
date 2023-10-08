import Nav from "@/components/navbar"
import Hero from "@/components/hero"
import Brand from "@/components/brand"
import Media from "@/components/media"
import Property from "@/components/property"
import Review from "@/components/review"
import Footer from "@/components/footer"
import Weather from "@/components/weather"
export default function Home() {
    return (
      <>
        <main className="px-24 py-px bg-slate-100">
            <Nav></Nav>
            <Hero></Hero>
        </main>

        <section className="pt-12">
        <Brand></Brand>
        </section>

        <section className="pt-12">
        <Media></Media>
        </section>

        <section className="pt-12">
        <Property></Property>
        </section>

        <section className="pt-12">
        <Review></Review>
        </section>

        <section className="pt-12">
        <Weather></Weather>
        </section>

        <section className="pt-12">
        <Footer></Footer>
        </section>

      </>

    )
}
