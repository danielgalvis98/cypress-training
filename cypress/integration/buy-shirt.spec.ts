import { AddresStepPage, BankPaymentPage, MenuContentPage, OrderSummaryPage, PaymentStepPage, ProductAddedModalPage, ProductListPage, ShippingStepPage, SignInStepPage, SummaryStepPage } from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const productAddedModalPage = new ProductAddedModalPage();
const summaryStepPage = new SummaryStepPage();
const signInStepPage = new SignInStepPage();
const addressStepPage = new AddresStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();
const bankPaymentPage = new BankPaymentPage();
const orderSumaryStepPage = new OrderSummaryPage();

describe("Buy a t-shirt", () => {
    it("then the t-shirt should be bought", () => {
        menuContentPage.visitMenuContentPage()
        menuContentPage.goToTShirtMenu()
        productListPage.addShirtToCart();
        productAddedModalPage.proccedToCheckout();
        summaryStepPage.confirmAndCheckout();

        signInStepPage.signIn("aperdomobo@gmail.com", "WorkshopProtractor");

        addressStepPage.goToShippingStep();
        shippingStepPage.acceptTermsOfService()
        shippingStepPage.goToPaymentMenu();

        paymentStepPage.payByBankwire();
        bankPaymentPage.confirmOrder();

        orderSumaryStepPage.validateTitle()
    });
});
