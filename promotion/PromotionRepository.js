const Promotion = require('./Promotion');

class PromotionRepository {
    constructor(knex) {
        this.knex = knex;
    }

    async getAll() {
        let promotionList = await this.knex.select('*').from('Promotion');
        return promotionList.map(allPromotion => this.factoryPromotion(allPromotion));
    }

        async findPromotionById(id) {
            let rawPromotion = await this.knex.select('*').from('Promotion').where('id', id);

            if(rawPromotion.length) {
                return this.factoryPromotion(rawPromotion[0]);
            }

            return null;
        }

    async add(data) {
        let addPromotion = await this.knex('Promotion').insert(data);
        return addPromotion;
    }

    async update(data, id) {
        let updatePromotion = await this.knex('Promotion').where('id', id).update(data);
        return updatePromotion;
    }

    async delete(id) {
        let deletePromotion = await this.knex('Promotion').where('id', id).del();
        return deletePromotion;
    }

    factoryPromotion(allPromotion) {
        return new Promotion(allPromotion.id, allPromotion.name, allPromotion.content);
    }
}

module.exports = PromotionRepository;
