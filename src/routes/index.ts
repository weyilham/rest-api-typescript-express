import { Application, Router } from 'express'
import { HealthRouter } from './health' // Pastikan HealthRouter didefinisikan dengan benar
import { ProductRouter } from './product' // Pastikan ProductRouter didefinisikan dengan benar

// Daftar route yang akan digunakan
const _routes: Array<[string, Router]> = [
  ['/health', HealthRouter],
  ['/product', ProductRouter],
]

// Fungsi untuk mengaplikasikan route pada app
export const routes = (app: Application) => {
  _routes.forEach(([path, router]) => {
    app.use(path, router) // Menggunakan router dengan path yang sesuai
  })
}
