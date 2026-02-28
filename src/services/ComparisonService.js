const competitors = {
    loom: {
        name: 'Loom',
        tagline: 'A Local-First Alternative to Loom.',
        description: 'Qaint delivers professional demo recording without forced cloud storage, login requirements, or recurring subscription fees.',
        comparison: [
            { feature: 'Price', competitor: '$12 - $15 / mo', qaint: 'Free ($0)', highlight: true },
            { feature: 'Storage Model', competitor: 'Cloud-First', qaint: 'Local-First', highlight: true },
            { feature: 'Recording Limit', competitor: 'Limited (Free Plan)', qaint: 'Unlimited', highlight: true },
            { feature: 'Account Required', competitor: 'Mandatory', qaint: 'No Login Required', highlight: true },
            { feature: 'Setup', competitor: 'Managed SaaS', qaint: 'Runs in Browser', highlight: false },
        ]
    },

    tella: {
        name: 'Tella',
        tagline: 'Professional Demo Recording — Without Subscription Lock-In.',
        description: 'Qaint offers structured demo workflows, camera overlays, and high-resolution recording without monthly pricing or cloud dependency.',
        comparison: [
            { feature: 'Price', competitor: '$15+ / mo', qaint: 'Free ($0)', highlight: true },
            { feature: 'Visual Enhancements', competitor: 'Paid Features', qaint: 'Included', highlight: true },
            { feature: 'Storage', competitor: 'Cloud Storage', qaint: 'Local Storage', highlight: true },
            { feature: 'Latency', competitor: 'Upload Dependent', qaint: 'Local Performance', highlight: false },
        ]
    },

    screenity: {
        name: 'Screenity',
        tagline: 'A Full Demo Lab — No Extensions Required.',
        description: 'Skip browser extensions. Qaint runs directly in your browser with direct file system access and structured demo workflows.',
        comparison: [
            { feature: 'Installation', competitor: 'Extension Required', qaint: 'No Install', highlight: true },
            { feature: 'Interface', competitor: 'Basic Controls', qaint: 'Structured Demo Lab', highlight: true },
            { feature: 'File Handling', competitor: 'Download After Capture', qaint: 'Direct-to-Disk', highlight: true },
        ]
    }
};

export const getCompetitorData = (slug) => {
    return competitors[slug.toLowerCase()] || null;
};