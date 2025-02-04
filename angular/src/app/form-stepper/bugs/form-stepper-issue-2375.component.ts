import { Component, OnInit } from "@angular/core";

const PaymentBatchStageSequence = {
  New: 1,
  UnderReview: 2,
  EORecommendation: 3,
  AOApproval: 4,
  PaymentInProgress: 5,
  PaidReconciled: 6
};
const PaymentStageType = {
  NewInBatch: "new",
  UnderReview: "reviewing",
  EORecommendation: "eo",
  AOApproval: "ao",
  PaymentInProgress: "inprogress",
  PaidReconciled: "paid"
}
const PaymentStageStatus = {
  NotStarted: "incomplete",
  Complete: "complete"
}

@Component({
  selector: "abgov-form-stepper-issue-2375",
  templateUrl: "./form-stepper-issue-2375.component.html",
})
export class FormStepperIssue2375Component implements OnInit {
  paymentBatchStatusStep = 1;
  isFinal = false;
  paymentBatchStatusArray = [
    {
      stageSequence: PaymentBatchStageSequence.New,
      stageType: PaymentStageType.NewInBatch,
      status: PaymentStageStatus.NotStarted,
    },
    {
      stageSequence: PaymentBatchStageSequence.UnderReview,
      stageType: PaymentStageType.UnderReview,
      status: PaymentStageStatus.NotStarted,
    },
    {
      stageSequence: PaymentBatchStageSequence.EORecommendation,
      stageType: PaymentStageType.EORecommendation,
      status: PaymentStageStatus.NotStarted,
    },
    {
      stageSequence: PaymentBatchStageSequence.AOApproval,
      stageType: PaymentStageType.AOApproval,
      status: PaymentStageStatus.NotStarted,
    },
    {
      stageSequence: PaymentBatchStageSequence.PaymentInProgress,
      stageType: PaymentStageType.PaymentInProgress,
      status: PaymentStageStatus.NotStarted,
    },
    {
      stageSequence: PaymentBatchStageSequence.PaidReconciled,
      stageType: PaymentStageType.PaidReconciled,
      status: PaymentStageStatus.NotStarted,
    },
  ];

  markCompletedStages = (step: number) => {
    this.paymentBatchStatusArray.forEach((stage) => {
      if (stage.stageSequence < step) {
        stage.status = PaymentStageStatus.Complete;
      }
    });
    const hasAnyNotCompleted = this.paymentBatchStatusArray.some(x => x.status === "incomplete");
    if (!hasAnyNotCompleted) {
      this.isFinal = true;
    }

    if (step > this.paymentBatchStatusArray.length) return;
    this.paymentBatchStatusStep = step;
  }
  ngOnInit() {
    this.markCompletedStages(4);
    if (this.paymentBatchStatusStep === this.paymentBatchStatusArray.length) {
      this.markCompletedStages(++this.paymentBatchStatusStep);
    } else {
      this.markCompletedStages(this.paymentBatchStatusStep);
    }
  }


  setPage(page: number) {
    console.log("setPage is called ", page);
    this.markCompletedStages(page);
  }

  updateCurrentStep(event: Event) {
    this.paymentBatchStatusStep = (event as CustomEvent).detail.step as number;
  }
  confirm () {
    this.isFinal = true;
  }
}
