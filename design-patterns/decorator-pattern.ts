// 1. Define the decorator
function Log(originalMethod: any, context: ClassMethodDecoratorContext) {
    const methodName = String(context.name);

    // 2. Return a new "wrapped" version of the function
    function replacementMethod(this: any, ...args: any[]) {
        console.log(`LOG: Entering ${methodName} method...`);
        
        // Run the actual function
        return originalMethod.call(this, ...args);
    }

    return replacementMethod;
}

// 3. Use it with @
class PaymentService {
    @Log
    processPayment(amount: number) {
        console.log(`Processing $${amount} now.`);
    }
}

const service = new PaymentService();
service.processPayment(100);

/* 
Output:
LOG: Entering processPayment method...
Processing $100 now.
*/
