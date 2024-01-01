export function Home() {
    return (
        <div style={{
        backgroundColor: 'pink', 
        borderRadius: "30%",
        textAlign: 'center'
        }}>
            <h1>Welcome to Our Jewelry Store</h1>
            <p>Welcome to our exquisite collection of fine jewelry. Discover the beauty and elegance that our handcrafted pieces bring.</p>
            
            <section className="Jewelry">
                <img src="/imgs/Jewelry.jpg" alt="Featured Jewelry" style = {{width:"1295px", 
                objectFit: "cover", borderRadius: "30%"}}/>
            </section>

            <section className="about-store">
                <h2>About Us</h2>
                <p>Learn about our journey in crafting fine jewelry and our commitment to quality and design.</p>
            </section>

            <section className="cta">
                <h2>Join Our Newsletter</h2>
                <p>Stay updated with our latest collections and exclusive offers.</p>
            </section>

            <section className="contact-info">
                <h2>Contact Us</h2>
                <p>Have questions? Reach out to our team for assistance.</p>
                <p>Email us at: <a href="mailto:jing.fan@student.lut.fi">jing.fan@student.lut.fi</a></p>
            </section>
        </div>
    );
}
