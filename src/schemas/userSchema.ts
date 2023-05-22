/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - code
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         code:
 *           type: integer
 *           description: The code of the user
 *       example:
 *         id: d290f1ee-6c54-4b01-90e6-d701748f0851
 *         name: username
 *         email: user@email.com
 *         code: 1234
 */
