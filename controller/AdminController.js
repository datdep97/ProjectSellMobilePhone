class AdminController {
    async getInfoAdmin(ctx, next) {
         let admins = await ctx.userRepository.getAll();
         ctx.render('admin.html', {admins});
     }
 
 }
 
 module.exports = AdminController;