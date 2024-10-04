import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Product name is required'], // Custom error message untuk validasi
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Price cannot be negative'], // Menambahkan validasi harga minimal
    },
    size: {
      type: String,
      required: [true, 'Product size is required'],
      enum: ['S', 'M', 'L', 'XL'], // Contoh penggunaan enum untuk memastikan ukuran valid
    },
  },
  {
    timestamps: true,
  },
)

const ProductModel = mongoose.model('Product', productSchema)
export default ProductModel
