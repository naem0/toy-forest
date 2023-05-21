import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card/Card';
import { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';

const ShopCards = () => {
    const [tabValue, setTabValue] = useState('all')
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://toy-marketplace-server-pi.vercel.app/toy/${tabValue}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [tabValue]);
    const navigation = useNavigation();
    console.log(navigation.state)
    if (navigation.state == 'loading') {
        return <progress className="progress w-56 mx-auto"></progress>
    }
    return (
        <div className="py-20">
            <h1 className="text-center mt-6 mb-6 text-4xl text-slate-600 font-bold">Shops Now</h1>
            <div className=" flex gap-12 justify-center mb-12 text-center md:w-3/4 lg:w-2/3 mx-auto text-slate-800 font-semibold">
                <p>
                    Toy Forest: Unlock the Joy of Learning! Explore our vast collection of educational toys designed to engage young minds and make learning fun.
                </p>
            </div>
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