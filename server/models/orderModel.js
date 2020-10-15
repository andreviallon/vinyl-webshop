import mongoose from 'mongoose';

const orderItemSchema = mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    album: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Album' }
});

const addressSchema = mongoose.Schema({
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true }
});

const paymentResultSchema = mongoose.Schema({
    id: { type: String },
    status: { type: String,},
    update_time: { type: String, required: true },
    email_address: { type: String, required: true }
});

const orderSchema = mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [orderItemSchema],
    shippingAddress: addressSchema,
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: paymentResultSchema,
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt: {
        type: Date
    },
}, {
    timestamps : true
});

const Order = mongoose.model('Order', orderSchema);

export default Order
