import Filter from "./Filter";

const AllCategories = () => {
    return ( <div>
        <h1>What are you looking for? </h1>
        { ['RACQUET', 'BALL', 'DRESS', 'CAP', 'SHIRT', 'SHORTS', 'SHOES', 'BAG', 'ALL'].map(category => <Filter category={category} key={category.id} />
     )}
        
</div>

    )
}

export default AllCategories;