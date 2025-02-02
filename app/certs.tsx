import Image from "next/image";

const Certs = () => {
    return (
        <div style={{ display: 'flex', margin: '3rem 0', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ textAlign: 'center' }}>Current Certifications</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row', gap: '50px', margin: '1rem 0' }}>

                <Image
                    src="/img/AdvHTML5_CSS3_sp.jpg"
                    alt="Michael Hefner"
                    width={115}
                    height={115}
                    style={{ borderRadius: "10px" }}
                />
                <Image
                    src="/img/site_dev_assoc.jpg"
                    alt="Michael Hefner"
                    width={115}
                    height={115}
                    style={{ borderRadius: "10px" }}
                />
                <Image
                    src="/img/UserInterface_sp.jpg"
                    alt="Michael Hefner"
                    width={115}
                    height={115}
                    style={{ borderRadius: "10px" }}
                />
            </div>
            <Image
                src="/img/comptia-a-ce-certification.1.png"
                alt="Michael Hefner"
                width={115}
                height={115}
                style={{ borderRadius: "10px" }}
            />
        </div>
    )
}

export default Certs;