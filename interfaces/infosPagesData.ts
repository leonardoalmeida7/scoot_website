export interface InfosPagesData {
    home: {
        features: {
            howItWorks: Array<{
                icon: string;
                title: string;
                description: string;
            }>;
            featureStep: Array<{
                title: string;
                description: string;
                image: {
                    mobile: string;
                    tablet: string;
                    desktop: string;
                };
                position: string;
                invert: boolean;
            }>;
        };
    };
}