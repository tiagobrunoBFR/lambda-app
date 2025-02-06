export function log(event) {
    console.log(process.env.APP_ENV);
    console.log('Adicionando log via função github action', JSON.stringify(event));
}