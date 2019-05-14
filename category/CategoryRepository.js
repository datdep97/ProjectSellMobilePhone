const Category = require('./Category');

class CategoryRepository {
    constructor(knex) {
        this.knex = knex;
    }
    
    async getAll() {
        let categoryList = await this.knex.select('*').from('Type_product');
        return categoryList.map(allCategory => this.factoryCategory(allCategory)); 
    }

    async findCategoryById(id) {
        let rawCategory = await this.knex.select('*').from('Type_product').where('id', id);

        if(rawCategory.length) {
            return this.factoryCategory(rawCategory[0]);
        } 

        return null;
    }

    async add(data) {
        let addCategory = await this.knex('Type_product').insert(data);
        return addCategory;
    }

    async update(data, id) {
        let updateCategory = await this.knex('Type_product').where('id', id).update(data);
        return updateCategory;
    }

    async delete(id) {
        let deleteCategory = await this.knex('Type_product').where('id', id).del();
        return deleteCategory;
    }

    factoryCategory(allCategoryData) {
        return new Category(allCategoryData.id, allCategoryData.name, allCategoryData.description, allCategoryData.status);
    }
}

module.exports = CategoryRepository;
