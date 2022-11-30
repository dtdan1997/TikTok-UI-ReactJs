import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes/routes';
import DefaultLayout from '~/layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            var Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </header>
            </div>
        </Router>
    );
}

export default App;
