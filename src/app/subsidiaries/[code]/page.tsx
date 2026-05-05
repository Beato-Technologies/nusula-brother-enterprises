import Breadcrumb from '@/components/BreadCrumb';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type SubsidiaryData = {
    name: string;
    tagline: string;
    established: string;
    address: string;
    phone: string;
    email: string;
    overview: string;
    role: string;
    highlights: { heading: string; year: string; body: string }[];
    products: string[];
};

const subsidiaries: Record<string, SubsidiaryData> = {
    tanzania: {
        name: 'NBE Tanzania',
        tagline: 'Regional Distribution & Trade Hub',
        established: 'Est. 2020',
        address: "Plot 16, Chango'mbe Area, Dar es Salaam, Tanzania",
        phone: '+255 796 317 866',
        email: 'tz@nusulabrotherenterprises.com',
        overview:
            'NBE Tanzania is the East African distribution arm of Nusula and Brother Enterprises, operating out of Dar es Salaam. The office connects Uganda-manufactured food ingredients with bakeries, confectioneries, and food processors across Tanzania, ensuring reliable supply and technical support throughout the region.',
        role: 'The Tanzania office serves as the primary point of contact for local clients seeking Fastbakes-branded products. Our in-country team handles logistics coordination, client onboarding, and after-sale support — ensuring every delivery meets our group-wide quality standards.',
        highlights: [
            {
                heading: 'Market Entry',
                year: '2020',
                body: "NBE Tanzania was established to address growing demand for premium baking ingredients in East Africa. Initial operations focused on sourcing and distributing Fastbakes cake premixes and emulsifiers to Dar es Salaam's expanding bakery sector.",
            },
            {
                heading: 'Distribution Expansion',
                year: '2022 – Present',
                body: 'The subsidiary broadened its scope to include specialty traded ingredients — caramel colour, xanthan gum, gelatin, and customised stabiliser blends — complementing the manufactured range shipped from Uganda. Today, NBE Tanzania serves clients across Dar es Salaam, Dodoma, and Mwanza.',
            },
        ],
        products: [
            'American Oil Muffin Mix',
            'Spongy Cake Premix',
            'Red Velvet Premix',
            'Cake Gel (Emulsifier)',
            "Baker's Fat",
            'Icing Sugar',
            'Pan Grease',
            'Caramel Colour (Plain / Ammonia)',
            'Xanthan Gum',
            'Gelatin (Bovine / Fish)',
        ],
    },
    uganda: {
        name: 'NBE Uganda',
        tagline: 'Manufacturing & Group Headquarters',
        established: 'Est. 2018',
        address: 'Kampala, Uganda',
        phone: '+256 703 412 545',
        email: 'info@nusulabrotherenterprises.com',
        overview:
            "NBE Uganda is the founding entity and manufacturing headquarters of Nusula and Brother Enterprises. Based in Kampala, this office oversees the production of the Fastbakes range of baking ingredients — from cake premixes and emulsifiers to bakers' fats, pan greases, and vinegar — supplying customers across Uganda and the broader East African region.",
        role: "The Uganda headquarters houses the group's production, quality control, R&D, and executive leadership functions. All Fastbakes-branded manufactured products originate from this facility, which operates under strict food-safety protocols to maintain consistency across every batch.",
        highlights: [
            {
                heading: 'Founding & First Production Run',
                year: '2018',
                body: 'Nusula and Brother Enterprises was incorporated in Uganda with the mission of providing affordable, high-quality baking ingredients to local bakers and food manufacturers. The first production run comprised Cake Gel and Spongy Cake Premix, distributed to bakeries in Kampala.',
            },
            {
                heading: 'Regional Growth',
                year: '2020 – Present',
                body: "Following strong domestic uptake, the group expanded its product catalogue to include Baker's Fat, Icing Sugar, Pan Grease, CR600/CR630 mould inhibitors, and a growing range of traded specialty ingredients. The Uganda facility now supports distribution to Tanzania through the NBE Tanzania subsidiary.",
            },
        ],
        products: [
            'American Oil Muffin Mix',
            'Spongy Cake Premix',
            'Red Velvet Premix',
            'Cake Gel (Emulsifier)',
            "Baker's Fat",
            'Icing Sugar',
            'Pan Grease',
            'Vinegar',
            'CR600 / CR630 Mould Inhibitors',
        ],
    },
};

type Props = {
    params: Promise<{ code: string }>;
};

export default async function SubsidiaryPage({ params }: Props) {
    const { code } = await params;
    const data = subsidiaries[code.toLowerCase()];

    if (!data) notFound();

    return (
        <>
            <Breadcrumb breadcrumbTitle={data.name} />

            <section className="subsidiary-section fix section-padding">
                <div className="container">

                    {/* Hero info strip */}
                    <div className="subsidiary-header mb-60">
                        <div className="row g-4 align-items-start">
                            <div className="col-lg-8">
                                <div className="subsidiary-identity">
                                    <span className="subsidiary-tag">{data.established}</span>
                                    <h2 className="subsidiary-name">{data.name}</h2>
                                    <p className="subsidiary-tagline">{data.tagline}</p>
                                    <p className="subsidiary-overview mt-3">{data.overview}</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="subsidiary-contact-card">
                                    <h5>Regional Contact</h5>
                                    <ul className="list-unstyled m-0">
                                        <li>
                                            <i className="fal fa-map-marker-alt me-2" />
                                            {data.address}
                                        </li>
                                        <li className="mt-2">
                                            <i className="fal fa-phone me-2" />
                                            <Link href={`tel:${data.phone.replace(/\s/g, '')}`}>{data.phone}</Link>
                                        </li>
                                        <li className="mt-2">
                                            <i className="fal fa-envelope me-2" />
                                            <Link href={`mailto:${data.email}`}>{data.email}</Link>
                                        </li>
                                    </ul>
                                    <div className="mt-4">
                                        <Link href="/contact" className="theme-btn">
                                            <span>Get In Touch <i className="fa-solid fa-arrow-right-long" /></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Role & purpose */}
                    <div className="subsidiary-role mb-60">
                        <div className="row g-4">
                            <div className="col-lg-12">
                                <div className="subsidiary-section-title">
                                    <h3 className='pt-4 pb-2'>Our Role in the Region</h3>
                                </div>
                                <p className="mt-3">{data.role}</p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline milestones */}
                    <div className="subsidiary-history mb-60">
                        <div className="subsidiary-section-title">
                            <h3 className='pt-4 pb-2'>Milestones</h3>
                        </div>
                        {data.highlights.map((item) => (
                            <div key={item.heading} className="subsidiary-milestone mt-4">
                                <h5 className="subsidiary-milestone-heading">
                                    {item.heading} <span className="subsidiary-milestone-year">{item.year}</span>
                                </h5>
                                <p className="mt-2">{item.body}</p>
                            </div>
                        ))}
                    </div>

                    {/* Products available in this region */}
                    <div className="subsidiary-products">
                        <div className="subsidiary-section-title">
                            <h3 className='pt-4 pb-2'>Products Available in This Region</h3>
                        </div>
                        <ul className="subsidiary-product-list mt-4">
                            {data.products.map((product) => (
                                <li key={product}>
                                    <i className="fa-solid fa-circle-check me-2" />
                                    {product}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <Link href="/services" className="theme-btn theme-btn-outline">
                                <span>View All Solutions <i className="fa-solid fa-arrow-right-long" /></span>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}