import { usePetContext } from '../../contexts/PetContext';

import { CatalogItem } from './CatalogItem/CatalogItem';

export const Catalog = () => {
    const {pets} = usePetContext();

    return (
        //{/* <!-- Catalogue --> */}
        <section id="catalog-page" >
            <div className="container">
                <div className="col-9">
                    {/* <!-- Display div: with information about every pet (if any) --> */}
                    {pets.map(x => <CatalogItem key={x._id} {...x} />)}

                    {/* <!-- Display paragraph: If there is no pets  --> */}
                    {pets.length === 0 && (<article className="not-available-photo">
                        <h1>No pets posts yet.</h1>
                    </article>)}
                </div>
            </div>
        </section>
    );
};