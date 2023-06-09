/*
 * 1. install stripe and react stripe
 * 2. create a checkout form with card elemnent(card element contains: card number,
 * expiration date, cvs, zip code)
 * 3. create account on stripe and get publiable key (pK)
 * 4. get card information
 * 5. create a payment method
 * 6. use test card to test payment
 * 7. on the server side: install stripe: npm install-save stripe
 * 8. crerate a payment intent api with payment method type : ['card']
 *  make sure you provide amount in cents (multiply parice with 100)
 * 9. call payment intent api to get client secrect and storre it in a state
 * 10 . use confirmCardPayment api with clientn secrect card info
 * 11. display confirm card error and success
 *  12. do things after payment ------>
 */
