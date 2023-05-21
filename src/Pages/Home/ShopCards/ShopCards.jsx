import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card/Card';
import { useEffect, useState } from 'react';

const ShopCards = () => {
    const [tabValue, setTabValue] = useState('all')
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`https://toy-marketplace-server-pi.vercel.app/toy/${tabValue}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [tabValue]);
    console.log(products)
    return (
        <div className="py-20">
            <Tabs >
                <TabList >
                    <Tab onClick={() => setTabValue('all')}>All Toys</Tab>
                    <Tab onClick={() => setTabValue('science')}>Science Toys</Tab>
                    <Tab onClick={() => setTabValue('language')}>Language Toys</Tab>
                    <Tab onClick={() => setTabValue('maths')}>Math Toys</Tab>

                </TabList>

                <TabPanel className='py-8'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {
                            products.map(product => <Card
                                key={product._id}
                                product={product}
                            ></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {
                            products.map(product => <Card
                                key={product._id}
                                product={product}
                            ></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {
                            products.map(product => <Card
                                key={product._id}
                                product={product}
                            ></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {
                            products.map(product => <Card
                                key={product._id}
                                product={product}
                            ></Card>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCards;