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
      buttonText?: string;
      invertX: boolean;
      invertY: boolean;
    }>;
  };
}


export interface AboutInterface {
  title: string;
  image: string;
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

export interface CareersInterface {
  title: string;
  image: string;
  buttonText?: string;
  features: Array<{
    title: string;
    description: string;
    image: string;
    position: string;
    invertX: boolean;
    invertY: boolean;
  }>;
  whyJoinUs: Array<{
    title: string;
    description: string;
    image: string;
  }>;
  jobs: Array<{
    job: string;
    location: string;
  }>;
}


export interface LocationInterface {
  title: string;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
  }
  geo: {
    mapImage: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
    cities: string[];
    position: {
      [city: string]: {
        top: string;
        left: string;
      }
    }
  };
}