import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {

    constructor() { }

    getContent() {
        this.page_one = {
            label: 'How We Work',
            heading: 'How We Work',
            content: '<p>First-time buyers searched for about six weeks and saw 11 homes before making a decision. ' +
            'Repeat buyers searched for eight weeks and looked at 12 homes before buying. ' +
            'Seventy-six percent of buyers used a real estate agent during their search, and 90% of buyers used the Internet as part of their home search. ' +
            'Who pays us to represent you? The Buyer and Buyer\'s agent go into contract to work with each other in a certain area, for a determined length of time, with fees to be paid by the Seller included in the price of the house. You get the benefit of representation without the cost of paying up front or directly. ' +
            'We can provide you New Home information. We have information about the builders and where they are building. We can go into my New Home Search and view new homes searching for different criteria. We can even view the floorplan and information about a subdivision and about the builder.</p>'
        };
        this.page_two = {
            label: 'Cash Needed',
            heading: 'Cash Needed Before Closing',
            content: ''
        };
        this.page_three = {
            label: 'Making It Easier',
            heading: 'Making The Loan Process Easier',
            content: '<p>After the loan application is made, your file goes through three basic departments.</p>' +
                '<p><strong>PROCESSING:</strong> This department is in charge of ordering credit reports, appraisals, title work, surveys, verification of your employment, rental history and funds. All of these items must be in the file before it is submitted to underwriting.</p>' + 
                '<p><strong>UNDERWRITING:</strong> This department has the responsibility (and accountability) of making sure that your loan meets the necessary requirements for your loan program. The three most important things that an underwriter is looking at are credit history, the property itself, and your ability to afford the new house payment along with your current debts. The underwriter is the person who approves the loan and makes sure that it meets all of the underwriting guidelines for your particular loan program.</p>' +
                '<p><strong>CLOSING:</strong> The closing department has your note and deed of trust prepared along with a million other documents you will sign when you go to the title company. Your agent and your loan officer will accompany you to closing.</p>' +
                '<p><strong>There are a few things that you can do to speed things along and reduce last minute problems:</strong></p>' +
                '<ul>' +
                    '<li>Do not make any major purchases during the loan application period.</li>' +
                    '<li>Do not apply for any new credit during the loan application period.</li>' +
                    '<li>Do keep proof of any items paid off (cancelled checks and/or paid receipts).</li>' +
                    '<li>Do keep copies of any deposit slips for any large deposits made to your account with an explanation of source of funds.</li>' +
                    '<li>Do have copies of paychecks and/or pay stubs.</li>' +
                    '<li>Do keep checking and savings account balances high. Three months payment reserve is sometimes required after closing.</li>' +
                '</ul>'
        };
        this.page_four = {
            label: 'Ten Commandments',
            heading: 'The Ten Commandments When Applying For A Mortgage',
            content: '<ol>' +
                '<li>Thou shalt not change jobs, become self-employed or quit your job.</li>' +
                '<li>Thou shalt not buy a car, truck or van (or you may be living in it).</li>' +
                '<li>Thou shalt not use credit cards excessively or let current accounts fall behind.</li>' +
                '<li>Thou shalt not spend money you have set aside for closing.</li>' +
                '<li>Thou shalt not omit debts or liabilities from your loan application.</li>' +
                '<li>Thou shalt not buy furniture.</li>' +
                '<li>Thou shalt not originate inquiries into your credit.</li>' +
                '<li>Thou shalt not make large deposits without checking with your loan officer.</li>' +
                '<li>Thou shalt not change bank accounts.</li>' +
                '<li>Thou shalt not co-sign a loan for anyone.</li>' +
            '</ol>'
        };
        this.page_five = {
            label: 'Glossary',
            heading: 'Glossary',
            content: '<div class="glossaryItem"><span class="glossaryWord">Ad Valorem Tax</span>: <span class="glossaryDefinition">Designates an assessment of taxes against property, according to the value.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Agreement of Sale</span>: <span class="glossaryDefinition">A written agreement whereby the purchaser agrees to buy a certain real estate and the seller agrees to sell, upon the terms and conditions set out </span>in a written agreement.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Amortization Schedule</span>: <span class="glossaryDefinition">A schedule showing the principal and interest payments throughout the life of the loan.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Appraisal</span>: <span class="glossaryDefinition">An opinion of value based upon factual analysis. Legally, an estimation of value by two disinterested persons of suitable qualifications.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Appraised Value</span>: <span class="glossaryDefinition">An estimate of present worth, in the opinion of an appraiser based upon an interpretation of facts and beliefs, as of a stated date.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Appurtenance</span>: <span class="glossaryDefinition">Anything so attached to the land or used with it that it is considered part of the property and would pass to the purchaser. For example, a garden or an </span>easement.</div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Assessment</span>: <span class="glossaryDefinition">Imposition of a tax, charges or levy for or against a piece of property, usually according to established according to established rates.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Assessor</span>: <span class="glossaryDefinition">A public official who evaluates property for the purpose of a taxation.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Assumption</span>: <span class="glossaryDefinition">An action whereby one person agrees to pay the debt incurred by another.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Assumption Transfer Fee</span>: <span class="glossaryDefinition">A fee assessed by the lender to the buyer to assume the present loan.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Bankrupt</span>: <span class="glossaryDefinition">A person who, through a court proceeding, is relieved from the payment of all his assets to a court appointed trustee.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Bequest</span>: <span class="glossaryDefinition">A provision in a will providing for the distribution of real or personal property.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Bill of Sale</span>: <span class="glossaryDefinition">A written instrument given to pass title to personal property.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Binder</span>: <span class="glossaryDefinition">A title insurance policy issued on construction loans for 6 months in which at the end of 6 months may be extended up to 36 months.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Breach of Contract</span>: <span class="glossaryDefinition">Failure, without legal excuse, of one of the parties to a contract or promise and a surety against fraud, theft, etc.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Building Line</span>: <span class="glossaryDefinition">A line fixed by zoning power to regulate locations of building on a property. NOT TO BE CONFUSED WITH PROPERTY LINE.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Building Restrictions</span>: <span class="glossaryDefinition">Covenants usually as minimum requirements and stated uses establishing the manner and ways which buildings may be built on property. Considered </span>to be encumbrances.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Chain of Title</span>: <span class="glossaryDefinition">A term applied to the past series of transactions and documents affecting the title to a particular parcel of land.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Chattel</span>: <span class="glossaryDefinition">Personal property.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Claim</span>: <span class="glossaryDefinition">An adverse right or interest asserted by an individual in property owned by another. Claims may arise from unpaid debts or taxes, as well as from hidden title </span>defects such as fraud, <span class="glossaryItem">forgery, missing heirs etc.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Clear Title</span>: <span class="glossaryDefinition">One which is not encumbered or burdened with defects.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Closing</span>: <span class="glossaryDefinition">(Also called “Settlement” A meeting of all parties involved in a property transaction during which pertinent documents are signed and transferred, and funds </span>are disbursed.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Closing Disclosure </span>: <span class="glossaryDefinition">A five-page form that provides final details about the mortgage loan you have selected. It includes the loan terms, your projected monthly </span>payments, and how much you will <span class="glossaryItem">pay in fees and other costs to get your mortgage. (closing costs).</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Cloud on Title</span>: <span class="glossaryDefinition">A claim or encumbrance that may affect title to land.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Commitment to Insure</span>: <span class="glossaryDefinition">A report issued by a title insurance company, or its agent, showing the condition of the title and committing the title company to issue a form </span>policy as designated in the <span class="glossaryItem">commitment upon compliance with and satisfaction of requirements as set forth in the commitment.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Community Property</span>: <span class="glossaryDefinition">That property owned by husband and wife when purchased with community funds.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Comparative Analysis</span>: <span class="glossaryDefinition">By comparing the selling prices of homes in a district area or area, a real estate agent may arrive at an estimate of value for a price of </span>property.</div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Conditions and Restrictions</span>: <span class="glossaryDefinition">A common term used to designate the uses to which land may not be put and providing penalties for failure to comply.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Condominium</span>: <span class="glossaryDefinition">A unit in a multi-unit structure, each individually owned, and carries with it a share of ownership in the common areas of the structure and facilities.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Consideration</span>: <span class="glossaryDefinition">The price or subject matter includes a contract; may be in money, commodity, exchange or transfer of personal effort. It is an essential element of a </span>valid contract.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Conveyance</span>: <span class="glossaryDefinition">A written document that evidences transfer of some interest in real property from one person to another.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Counter Offer</span>: <span class="glossaryDefinition">Is the rejection of an offer and is used as such in rejection and yet keeps negotiations open.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Courier Fee</span>: <span class="glossaryDefinition">A fee incurred to have various papers pertinent to the closing delivered or picked up.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Covenant</span>: <span class="glossaryDefinition">An agreement written into deeds and other instruments promising performance or non-performance of certain acts, or stipulating certain uses or non-uses of </span>property.</div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Credit Report</span>: <span class="glossaryDefinition">A report on the past ability of a loan applicant to pay installment payments.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">CRV</span>: <span class="glossaryDefinition">The terms used for appraisal for a VA loan - Means Certificate of Reasonable Value.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Debt</span>: <span class="glossaryDefinition">Something owned to another; an obligation to pay or re-turn something.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Deed</span>: <span class="glossaryDefinition">A written instrument signed, sealed and acknowledged wherein a property owner pledges his property as security for a debt by conveying title to one or more </span>trustees for the purpose named <span class="glossaryItem">in the deed of trust. If default occurs under the</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Deed of trust, the trustee has the authority to sell the property and apply the proceeds of the sale to the debt.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Default</span>: <span class="glossaryDefinition">Non-performance of duty arising under a contract or otherwise.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Delinquent Taxes</span>: <span class="glossaryDefinition">Unpaid property taxes. Such taxes are a lien against real property.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Depreciation</span>: <span class="glossaryDefinition">Loss in value.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Descent</span>: <span class="glossaryDefinition">Title by descent arises when a person obtains land from a relative who dies intestate (without a will).</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Devise</span>: <span class="glossaryDefinition">A transfer of real estate by will or last testament.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Discount Fare</span>: <span class="glossaryDefinition">The discount rate is the rate of interest a commercial bank must pay when it borrows from a federal reserve bank.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Earnest Money</span>: <span class="glossaryDefinition">Advance payment of part of the purchase price to bind a contract for property. The money is usually placed in escrow.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Easement</span>: <span class="glossaryDefinition">Rights of a person or company to use the land of another for limited purpose, such as laying a sewer, electric power lines or crossing the property.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Endorsement</span>: <span class="glossaryDefinition">A statement issued by an insurance company, whether it be for a Homeowner’s Policy or Owner’s Title Policy, to change or correct the information </span>contained in the policy.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Equity</span>: <span class="glossaryDefinition">The difference between the market value and the amount of the indebtedness on a property.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Escrow</span>: <span class="glossaryDefinition">Holding of money and/or documents by a disinterested third party while conditions of intended contract are met.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Escrow Account</span>: <span class="glossaryDefinition">Opened for the protection of the principals and maintained by the title company, broker, lawyer, etc.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Escrow Agent</span>: <span class="glossaryDefinition">The holder of monies and/or properties and is agent for both buyer and seller.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Escrow Fee</span>: <span class="glossaryDefinition">The Escrow Agent’s fee for closing the transaction.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Examination of Title</span>: <span class="glossaryDefinition">The interpretation of the record title to real property based on the title search or abstract.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Federal Tax Lien</span>: <span class="glossaryDefinition">A lien attaching to property for nonpayment of a federal tax (estate, income, etc.) A federal tax lien differs from other liens in that it is not </span>automatically wiped out by <span class="glossaryItem">foreclosing on a mortgage or trust deed recorded before the tax lien (except by judicial foreclosure).</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Filing Fee</span>: <span class="glossaryDefinition">The fee charged by the County Clerk’s office to record the various documents pertaining to the closing.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">First Mortgage</span>: <span class="glossaryDefinition">A mortgage that creates a superior lien on property mortgaged relative to other charges or encumbrances against same.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Funding Approval</span>: <span class="glossaryDefinition">The lender’s approval to disburse funds.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Good Funds</span>: <span class="glossaryDefinition">Cash or wire transfers, certified funds, including certified checks and cashier’s checks, uncertified checks in the amounts less than $1,500/00, including </span>checks, travelers checks, <span class="glossaryItem">money orders which are presented to the Escrow Agent for disbursement.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Homeowner’s Insurance</span>: <span class="glossaryDefinition">Protects the property and contents in case of loss; must be for at least the loan amount or for 80% of the value of the improvements, whichever </span>is greater.</div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Homestead</span>: <span class="glossaryDefinition">Land, and the improvements thereon, where the head of the family resides, and therefore, protected by state law from forced sale by certain creditors of </span>the owner.</div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Home Warranty Insurance</span>: <span class="glossaryDefinition">Private Insurance insuring a buyer against defects (usually plumbing, heating and electrical) in the home he has purchased. The period of </span>insurance varies and both new <span class="glossaryItem">and used homes may be insured.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Inspections</span>: <span class="glossaryDefinition">An examination of property for various reasons such as termite inspections; inspection to see if required repairs were made before funds are received, </span>etc.</div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Insurable Title</span>: <span class="glossaryDefinition">A title which a title company will insure.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Insurance</span>: <span class="glossaryDefinition">A contract of indemnity against specified perils.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Interest</span>: <span class="glossaryDefinition">Cost of loan funds, always paid in arrears.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Legal Description</span>: <span class="glossaryDefinition">A method of geographically identifying a parcel of land, which is acceptable in a court of law.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Lien</span>: <span class="glossaryDefinition">A monetary charge imposed upon a property. A lien is usually held as security for the payment of some debt or obligation such as property repairs, improvements, </span>a bank loan, etc.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Loan Application Fee</span>: <span class="glossaryDefinition">Paid to the lender at the time of application; check with lender for amount.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Loan Discount</span>: <span class="glossaryDefinition">The points a lender charges; may be paid by either buyer or seller on conventional loans; number of points fluctuates with mortgage money market.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Maintenance Fee</span>: <span class="glossaryDefinition">Charged by the homeowner’s association as set out in a subdivision’s restrictions.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Market Value</span>: <span class="glossaryDefinition">The power of a property to command other commodities in exchange. It is the price at which a willing seller would sell and a willing buyer would buy, </span>neither under abnormal <span class="glossaryItem">pressure.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Mortgage</span>: <span class="glossaryDefinition">Legal document used to encumber property pledged as security for a loan.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Mortgage Assumption</span>: <span class="glossaryDefinition">A real estate transaction wherein the buyer agrees to assume the loan obligation against a property.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Mortgagee</span>: <span class="glossaryDefinition">The person taking or receiving a mortgage; the lender.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Mortgage Title Policy</span>: <span class="glossaryDefinition">A title insurance policy insuring a mortgage or beneficiary under a Deed of Trust, against loss caused by invalid title in the borrower, or </span>loss of priority of the <span class="glossaryItem">mortgage or Deed of Trust.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Mortgagor</span>: <span class="glossaryDefinition">The one, who, having all or part of title to property, pledges that property as security for a debt; the borrower.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Municipal Utility District</span>: <span class="glossaryDefinition">An area which has a special tax for providing water and/or sewer services.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Option Money</span>: <span class="glossaryDefinition">Money Buyer pays to Seller for the unrestricted right to terminate the contract within the time specified, the Option Money will not be refunded, </span>however any Earnest Money will be <span class="glossaryItem">refunded to the buyer.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Option Period</span>: <span class="glossaryDefinition">Period of time specified in the contract in which the buyer has the unrestricted right to terminate, forfeiting the Option Money.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Origination Fee</span>: <span class="glossaryDefinition">A fee the buyer pays the lender to originate a new loan.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Owners’ Title Policy</span>: <span class="glossaryDefinition">Title Insurance for the owner of property, rather than a lien holder.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Payoff</span>: <span class="glossaryDefinition">The payment in full of an existing loan or other lien.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Payoff Penalty</span>: <span class="glossaryDefinition">A full month’s interest charge for default of written notice of intent to payoff the loan in full.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Point</span>: <span class="glossaryDefinition">1% of loan amount.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Power of Attorney</span>: <span class="glossaryDefinition">A document giving one person the authority to act in the place of another as his agent or attorney.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Principal</span>: <span class="glossaryDefinition">The principal is the same as the sum of money upon which the interest is paid; the sum loaned, borrowed or invested.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Pro-Rate</span>: <span class="glossaryDefinition">To allocate between seller and buyer their proportionate share of an obligation paid or due; such as taxes, rents, insurance, interest, assessments, etc.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Real Property</span>: <span class="glossaryDefinition">Land and any improvements; anything built on it, affixed to it or growing in it.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Realtor Fees</span>: <span class="glossaryDefinition">An amount paid to the realtor as compensated for his/her services.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Recording Fees</span>: <span class="glossaryDefinition">Charged by the County Clerk to record documents in public records.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Restrictions</span>: <span class="glossaryDefinition">A restriction limits the use to which land may be put.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Survey</span>: <span class="glossaryDefinition">The product of measuring land to determine its size, location and physical description.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Survey Deletion</span>: <span class="glossaryDefinition">A deletion to the Mortgagee Title Policy after receipt of an acceptable survey to reflect “shortages in area” on the policy and reflecting any </span>exceptions on the policy. A <span class="glossaryItem">survey deletion may also be purchased for the Owner’s Policy.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Table Funding</span>: <span class="glossaryDefinition">When the Lender sends “Good Funds” (see definition) with their loan package or wires the funds to and gives us their authorization to disburse at the </span>closing table.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Tax Certificate</span>: <span class="glossaryDefinition">A certificate issued by a Tax Service which shows all taxes currently due on a particular piece of property.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Tax Deletion</span>: <span class="glossaryDefinition">A deletion to the Mortgage Title Policy insuring that the taxes are paid through the year stated on the policy and that there are no outstanding taxes </span>up to that time. There is a <span class="glossaryItem">charge for this deletion.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Tax Probation</span>: <span class="glossaryDefinition">Seller pays buyer’s taxes from January 1 to closing.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Title Insurance Premium</span>: <span class="glossaryDefinition">The amount paid for issuing a title policy. This charge is set by the state. Rate cards are available at title companies.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Title Insurance Policy</span>: <span class="glossaryDefinition">Insurance against loss resulting from defects of title to a specifically described parcel of real property.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Zoning</span>: <span class="glossaryDefinition">Procedure for classifying real estate for various uses, usually in accordance with a land-use plan that has been approved by a governing body. NOT TO BE </span>CONFUSED WITH RESTRICTIONS.</span></div>' +
            '<div class="glossaryItem"><span class="glossaryWord">Zoning Ordinance</span>: <span class="glossaryDefinition">A law (generally at the city or county level) controlling the use of land and construction of improvements in a given area (zone).</span>'
        };

        return [
            this.page_one,
            this.page_two,
            this.page_three,
            this.page_four,
            this.page_five,
        ];
    }
}
