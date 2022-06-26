class Order {
    orderNo;
    orderDetails;
    constructor(orderNo, orderDetails) {
        this.orderNo = orderNo;
        this.orderDetails = orderDetails;
    }

    setOrderNo(orNo) {
        this.orderNo = orNo;
    }
    getOrderNo() {
        return this.orderNo;
    }
}