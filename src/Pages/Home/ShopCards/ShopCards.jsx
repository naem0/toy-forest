import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card/Card';
import { useEffect, useState } from 'react';

const ShopCards = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/toy-products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    console.log(products)
    return (
        <div className="py-20">
            <Tabs>
            <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
                <Tab>Title 3</Tab>
            </TabList>

            <TabPanel className='py-8'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {
                    products.map(service => <Card
                        key={service._id}
                        service={service}
                    ></Card>)
                }
                    
                </div>
                
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
        </Tabs>
        </div>
    );
};

export default ShopCards;