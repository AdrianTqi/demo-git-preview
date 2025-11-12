const SHIPPING_TYPES = {
    STANDARD: 'standard',
    EXPRESS: 'express',
    OVERNIGHT: 'overnight',
}

export function calculateShippingCost(weight: number, type: string): number {
    let costPerKg: number;
    switch (type) {
        case SHIPPING_TYPES.STANDARD:
            costPerKg = 5;
            break;
        case SHIPPING_TYPES.EXPRESS:
            costPerKg = 10;
            break;
        case SHIPPING_TYPES.OVERNIGHT:
            costPerKg = 20;
            break;
        default:
            throw new Error('Invalid shipping type');
    }
    return weight * costPerKg;
}

export function trackShipment(trackingNumber: string): string {
    // Dummy implementation for tracking
    return `Shipment with tracking number ${trackingNumber} is in transit.`;
}