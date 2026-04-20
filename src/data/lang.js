const messages = {
  ar: {
    navbar: {
      home: 'الرئيسية',
      operators: 'المشغلين',
      jobOpportunities: 'فرص العمل',
      governmentJobs: 'الوظائف الحكومية',
      login: 'تسجيل الدخول',
      newUser: 'مستخدم جديد',
      language: 'AR',
    },

    footer: {
      faq: 'الأسئلة الشائعة',
      howToUse: 'كيفية الاستخدام',
      contact: 'تواصل معنا',
      privacy: 'سياسة الخصوصية',
      rights: 'جميع الحقوق محفوظة',
      developedBy: 'تصميم وتطوير',
      stayInTouch: 'ابقى معنا على اتصال',
      emailPlaceholder: 'البريد الالكتروني',
    },

    home: {
      hero: {
        title: 'هناك 1,600 وظيفة هنا من أجلك!',
        subtitle: 'تقدم الآن لتحصل على فرصة أحلامك',
        description: 'وظائف مميزة، فرص العمل والتدريبات المتنوعة بكافة المجالات',
        searchJob: 'اسم أو عنوان الوظيفة',
        searchLocation: 'موقع الوظيفة',
        searchBtn: 'بحث',
      },

      categories: {
        title: 'فرص عمل في جميع القطاعات',
        description: 'مجموعة من الشركات الداعمة والتي تساعد على توفير فرص العمل عن طريق Job Matching',
        items: {
          hr: 'الموارد البشرية',
          tourism: 'السفر والسياحة',
          restaurants: 'المطاعم والمقاهي',
          customerService: 'خدمة عملاء',
          arts: 'الفنون والثقافة',
          finance: 'التمويل والاستثمار',
          logistics: 'اللوجستيات والنقل',
          agriculture: 'الزراعة والبيئة',
        }
      },

      stats: {
        jobs: 'عدد الوظائف',
        sectors: 'عدد القطاعات',
        companies: 'عدد الشركات / المشغلين',
        beneficiaries: 'عدد المستفيدين',
      },

      partners: {
        title: 'الشركاء الرئيسيين',
        description: 'الجهات والمنصات الشريكة في تزويد منصة مواءمة فرص العمل Job Match بإعلانات فرص العمل',
        jobsCount: '122 وظيفة',
      },

      career: {
        title: 'اختر مسارك المهني',
        description: 'منصة متكاملة للحصول على وظيفة الأحلام أو الوصول إلى أفضل المواهب لشركتك الخاصة',
        companyCard: {
          smallTitle: 'إنشاء حساب',
          title: 'شركة / مؤسسة توظيف',
          description: 'إنشاء حساب توظيف يمكنك من خلاله نشر فرص عمل أو منح أو تدريب عملي',
        },
        seekerCard: {
          smallTitle: 'إنشاء حساب',
          title: 'باحث عن عمل',
          description: 'إنشاء حساب باحث عن عمل يمكنك من خلاله نشر فرص عمل أو منح أو تدريب عملي تقدمه الشركة',
        }
      },

      latestJobs: {
        title: 'أحـدث الوظائف',
        description: 'مجموعة من الوظائف الشاغرة والتي تساعد الخريجين للوصول لأهدافهم العملية',
        viewAll: 'عرض الكل',
        sector: 'قطاع تكنولوجيا المعلومات',
        remote: 'عمل عن بعد',
        partTime: 'دوام جزئي',
        advanced: 'مستوى متقدم',
        jobs: [
          {
            title: 'محلل نظم معلومات',
            location: 'فلسطين | نابلس'
          },
          {
            title: 'مطور تطبيقات موبايل',
            location: 'فلسطين | الخليل'
          },
          {
            title: 'مدير مشروع تكنولوجي',
            location: 'فلسطين | بيت لحم'
          },
          {
            title: 'مطور برمجيات بخبرة Full Stack',
            location: 'فلسطين | غزة'
          },
          {
            title: 'مصمم UX/UI أول متخصص في أبحاث المستخدم',
            location: 'فلسطين | نابلس'
          },
          {
            title: 'محلل بيانات',
            location: 'فلسطين | طولكرم'
          }
        ]
      },

      governmentJobs: {
        title: 'أحدث الوظائف الحكومية',
        description: 'تقدم Job Matching مجموعة من الفرص الوظيفية في القطاع الحكومي، حيث يمكن للباحثين عن عمل استكشاف الوظائف المتاحة في مختلف الإدارات الحكومية. هذه الفرص تشمل مجموعة متنوعة من التخصصات، مما يتيح للمتقدمين فرصة الانضمام إلى فرق عمل مهنية تسهم في تطوير المجتمع وتحقيق التنمية المستدامة.',
        viewMore: 'عرض المزيد',
        applyNow: 'تقدّم الآن',
        deadline: 'التقديم متاح حتى تاريخ 10 تموز 2025',
        tags: {
          bonus: 'مكافآت أداء',
          hybrid: 'عمل هجين'
        }
      },

      news: {
        sectionTitle: 'الأخبار والفعاليات',
        sectionDescription: 'كن على اطلاع دائم بآخر المستجدات وفرص التطوير المهني في فلسطين',
        date: '12 حزيران 2025',
        title: 'فرص عمل جديدة في قطاع التكنولوجيا',
        description: 'اشترك في نشرتنا الإخبارية للبقاء على اطلاع بأحدث الاتجاهات في الصناعة، ونصائح الخبراء، وفرص العمل الحصرية في جميع أنحاء فلسطين. انضم إلى مجتمعنا المتنامي من المهنيين المتحمسين وابق في الطليعة.',
      },

      lotsOfJobs: {
        title1: 'عشرات الوظائف المقدمة',
        title2: 'قم بالتقديم على الوظيفة المناسبة لمهاراتك',
        description: 'ستجد عددًا كبيرًا من الوظائف المقدمة من خلال الموقع والشركات بمختلف المجالات لوصولك لوظيفة أحلامك أو لتطوير مهاراتك الحالية ولفرص تدريب العمل',
        point1: 'عدد كبير من الوظائف المقدمة',
        point2: 'عدد كبير من المجالات للأعمال',
        point3: 'فرص تدريب للخريجين الجدد',
      },

      faq: {
        smallTitle: 'أسال Job Matching',
        title1: 'الأسئلة',
        title2: 'الشائعة',
        description: 'على مدار رحلتنا، قمنا بتعزيز علاقة قوية من الثقة مع عملائنا، ليس فقط من خلال تميز خدماتنا، ولكن من خلال أصالة علاقاتنا. كل مشروع يمثل أكثر من مجرد مهمة؛ إنه مغامرة تعاونية قائمة على الشفافية والالتزام والقيم المشتركة.',
        viewAll: 'عرض الكل',
        questions: [
          {
            q: 'ما هي Job Matching ؟',
            a: 'Job Matching هي منصة تهدف إلى مواءمة الباحثين عن عمل مع الفرص المناسبة وفق المهارات والخبرات والقطاعات المختلفة.'
          },
          {
            q: 'ما القطاعات التي تشملها Job Matching ؟',
            a: 'تشمل قطاعات متعددة مثل تكنولوجيا المعلومات، الموارد البشرية، التمويل، اللوجستيات، السياحة، الفنون، والزراعة وغيرها.'
          },
          {
            q: 'ما هي أهداف Job Matching ؟',
            a: 'منذ تأسيسها في عام 2011، قامت Job Matching بتنفيذ مشاريع التنمية المستدامة التي تهدف إلى تحسين ظروف المعيشة للمجتمعات المحرومة. لقد نجحنا في تجديد أكثر من 200 فرصة عمل في مناطق مختلفة.'
          }
        ]
      }
    }
  },

  en: {
    navbar: {
      home: 'Home',
      operators: 'Operators',
      jobOpportunities: 'Job Opportunities',
      governmentJobs: 'Government Jobs',
      login: 'Log In',
      newUser: 'New User',
      language: 'EN',
    },

    footer: {
      faq: 'FAQ',
      howToUse: 'How to Use',
      contact: 'Contact Us',
      privacy: 'Privacy Policy',
      rights: 'All rights reserved',
      developedBy: 'Design & Development',
      stayInTouch: 'Stay in Touch',
      emailPlaceholder: 'Email Address',
    },

    home: {
      hero: {
        title: '1,600 Jobs Available For You!',
        subtitle: 'Apply now and get your dream opportunity',
        description: 'Featured jobs, opportunities, and training across all fields',
        searchJob: 'Job title or keyword',
        searchLocation: 'Job location',
        searchBtn: 'Search',
      },

      categories: {
        title: 'Jobs in All Sectors',
        description: 'A group of supporting companies helping provide job opportunities through Job Matching',
        items: {
          hr: 'Human Resources',
          tourism: 'Travel & Tourism',
          restaurants: 'Restaurants & Cafes',
          customerService: 'Customer Service',
          arts: 'Arts & Culture',
          finance: 'Finance & Investment',
          logistics: 'Logistics & Transport',
          agriculture: 'Agriculture&Environment',
        }
      },

      stats: {
        jobs: 'Number of Jobs',
        sectors: 'Number of Sectors',
        companies: 'Number of Companies / Employers',
        beneficiaries: 'Number of Beneficiaries',
      },

      partners: {
        title: 'Key Partners',
        description: 'Partner entities and platforms supplying Job Match with job opportunity announcements',
        jobsCount: '122 Jobs',
      },

      career: {
        title: 'Choose Your Career Path',
        description: 'An integrated platform to get your dream job or reach the best talents for your company',
        companyCard: {
          smallTitle: 'Create Account',
          title: 'Company / Recruitment Organization',
          description: 'Create a hiring account through which you can post jobs, grants, or practical training opportunities',
        },
        seekerCard: {
          smallTitle: 'Create Account',
          title: 'Job Seeker',
          description: 'Create a job seeker account through which you can apply to jobs, grants, or training opportunities offered by companies',
        }
      },

      latestJobs: {
        title: 'Latest Jobs',
        description: 'A group of vacancies helping graduates reach their professional goals',
        viewAll: 'View All',
        sector: 'Information Technology Sector',
        remote: 'Remote Work',
        partTime: 'Part Time',
        advanced: 'Advanced Level',
        jobs: [
          {
            title: 'Information Systems Analyst',
            location: 'Palestine | Nablus'
          },
          {
            title: 'Mobile App Developer',
            location: 'Palestine | Hebron'
          },
          {
            title: 'Technology Project Manager',
            location: 'Palestine | Bethlehem'
          },
          {
            title: 'Software Developer Experienced in Full Stack Development',
            location: 'Palestine | Gaza'
          },
          {
            title: 'Senior UX/UI Designer with Specialization in User Research',
            location: 'Palestine | Nablus'
          },
          {
            title: 'Data Analyst',
            location: 'Palestine | Tulkarm'
          }
        ]
      },

      governmentJobs: {
        title: 'Latest Government Jobs',
        description: 'Job Matching offers a collection of job opportunities in the government sector, allowing job seekers to explore vacancies in different public departments. These opportunities cover a variety of specialties, enabling applicants to join professional teams that contribute to community development and sustainable growth.',
        viewMore: 'View More',
        applyNow: 'Apply Now',
        deadline: 'Application available until July 10, 2025',
        tags: {
          bonus: 'Performance Bonus',
          hybrid: 'Hybrid Work'
        }
      },

      news: {
        sectionTitle: 'News & Events',
        sectionDescription: 'Stay up to date with the latest updates and professional development opportunities in Palestine',
        date: '12 June 2025',
        title: 'New Job Opportunities in the Technology Sector',
        description: 'Subscribe to our newsletter to stay updated on the latest industry trends, expert advice, and exclusive job opportunities across Palestine. Join our growing community of passionate professionals and stay ahead.',
      },

      lotsOfJobs: {
        title1: 'Dozens of Posted Jobs',
        title2: 'Apply for the Job That Matches Your Skills',
        description: 'You will find a large number of jobs offered through the platform and companies in various fields to help you reach your dream job, improve your current skills, and access training opportunities',
        point1: 'A large number of posted jobs',
        point2: 'A wide variety of business fields',
        point3: 'Training opportunities for fresh graduates',
      },

      faq: {
        smallTitle: 'Ask Job Matching',
        title1: 'Frequently',
        title2: 'Asked Questions',
        description: 'Throughout our journey, we have built a strong relationship of trust with our clients, not only through the excellence of our services, but through the authenticity of our relationships. Every project is more than just a task; it is a collaborative adventure built on transparency, commitment, and shared values.',
        viewAll: 'View All',
        questions: [
          {
            q: 'What is Job Matching?',
            a: 'Job Matching is a platform aimed at aligning job seekers with suitable opportunities based on skills, experience, and different sectors.'
          },
          {
            q: 'What sectors does Job Matching cover?',
            a: 'It covers multiple sectors such as information technology, human resources, finance, logistics, tourism, arts, agriculture, and more.'
          },
          {
            q: 'What are the goals of Job Matching?',
            a: 'Since its establishment in 2011, Job Matching has implemented sustainable development projects aimed at improving living conditions for underserved communities. We have successfully created more than 200 job opportunities in different areas.'
          }
        ]
      }
    }
  }
}

export default messages