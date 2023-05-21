import usetitle from "../../component/useTitle";


const Blog = () => {
    usetitle('Blog')
    return (
        <div className="p-4 w-full md:w-3/4 lg:w-2/3 mx-auto mb-16">
            <h1 className="font-bold text-4xl text-center text-slate-700">Blog</h1>
            <div className=" mt-12">
                <h1 className='font-medium text-2xl mb-4'>
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h1>
                <p className='text-slate-500'>

                    Access token: Credential granting access to resources/services on behalf of a user.

                    Refresh token: Credential used to obtain a new access token without reauthentication.

                    Store on client-side: Securely store in cookies or browser storage mechanisms.
                </p>
            </div>
            <div className="mt-12">
                <h1 className='font-medium text-2xl mb-4'>
                    Compare SQL and NoSQL databases?
                </h1>
                <p className='text-slate-500'>

                    SQL databases: Relational, structured tables, predefined schemas, data consistency, enforce relationships.

                    NoSQL databases: Non-relational, flexible formats (key-value, document, columnar, graph), high scalability, performance, flexible schema, handle unstructured data.
                </p>
            </div>
            <div className="mt-12">
                <h1 className='font-medium text-2xl mb-4'>
                    What is express js? What is Nest JS?
                </h1>
                <p className='text-slate-500'>
                    Express.js is a minimalistic and flexible web application framework for Node.js. It provides a set of features and utilities to build web applications and APIs easily. With Express.js, developers can handle routes, HTTP requests and responses, middleware, and other common web application functionalities.
                </p>
            </div>
            <div className="mt-12">
                <h1 className='font-medium text-2xl mb-4'>
                    What is MongoDB aggregate and how does it work?
                </h1>
                <p className='text-slate-500'>
                    MongoDB aggregate: Performs data aggregation and analysis using a pipeline of stages. Each stage processes documents and passes the result to the next stage. Stages include filtering, grouping, projecting, sorting, limiting, and joining. Enables complex data transformations and calculations.
                </p>
            </div>
        </div>
    );
};

export default Blog;