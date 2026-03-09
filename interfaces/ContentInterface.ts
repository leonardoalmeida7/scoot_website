export interface HomeInterface {
  hero: {
    title: string;
    description: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  features: {
    howItWorks: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    featureStep: Array<{
      title: string;
      description: string;
      image: string;
      position: string;
      invertX: boolean;
      invertY: boolean;
    }>;
  };
}


export interface AboutInterface {
  title: string;
  image: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
    image: string;
    position: string;
    invertX: boolean;
    invertY: boolean;
  }>;
  ourValues: Array<{
    title: string;
    description: string;
    image: string;
  }>;
  FAQs: {
    howItWorks: Array<{
      question: string;
      answer: string;
    }>;
    safeDriving: Array<{
      question: string;
      answer: string;
    }>;
  };
}