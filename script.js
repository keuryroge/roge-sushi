const CONFIG = {
    deliveryFee: 8,
    freeShipping: 120,
    minimumOrder: 30,
    openingHour: 18,
    closingHour: 23
};

const FALLBACK_IMAGE =
    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=85";


const translations = {

    pt: {

        skipContent: "Ir para o conteúdo",

        navHome: "Início",
        navPopular: "Mais pedidos",
        navMenu: "Cardápio",
        navExperience: "Experiência",
        navReservation: "Reserva",
        navContact: "Contato",

        heroEyebrow:
            "JAPANESE FOOD • CONTEMPORARY EXPERIENCE",

        heroTitle1: "Arte japonesa",
        heroTitle2: "em cada",
        heroTitle3: "detalhe.",

        heroDescription:
            "Ingredientes selecionados, precisão e sabor em uma experiência japonesa contemporânea.",

        viewMenu: "Ver cardápio",
        reserveTable: "Reservar mesa",

        heroFeature1:
            "INGREDIENTES SELECIONADOS",

        heroFeature2:
            "PREPARO PRECISO",

        explore: "EXPLORAR",

        popularEyebrow:
            "FAVORITOS DA CASA",

        popularTitle1:
            "Os mais",

        popularTitle2:
            "pedidos.",

        popularDescription:
            "Uma seleção dos pratos que conquistam primeiro.",

        omakaseTitle1:
            "Deixe a",

        omakaseTitle2:
            "experiência",

        omakaseTitle3:
            "surpreender você.",

        omakaseText:
            "Uma experiência inspirada no conceito japonês de confiar ao chef a escolha de cada detalhe.",

        discover:
            "Descobrir",

        menuEyebrow:
            "NOSSO CARDÁPIO",

        menuTitle1:
            "Escolha seu",

        menuTitle2:
            "favorito.",

        menuDescription:
            "Explore sabores clássicos e combinações contemporâneas.",

        categoryAll:
            "Todos",

        categoryPopular:
            "Mais pedidos",

        categoryFavorites:
            "Favoritos",

        categoryCombos:
            "Combinados",

        categoryHot:
            "Quentes",

        categoryDrinks:
            "Bebidas",

        clearFilters:
            "Limpar filtros",

        noResultsTitle:
            "Nenhum resultado",

        noResultsText:
            "Tente outro termo ou categoria.",

        philosophy1:
            "Comer também",

        philosophy2:
            "é uma",

        philosophy3:
            "experiência.",

        storyEyebrow:
            "NOSSA ESSÊNCIA",

        storyTitle1:
            "Japão",

        storyTitle2:
            "encontra o",

        storyTitle3:
            "contemporâneo.",

        storyText:
            "Tradição, criatividade e apresentação se encontram para criar uma experiência japonesa contemporânea.",

        menuOptions:
            "OPÇÕES NO MENU",

        responsive:
            "RESPONSIVO",

        languages:
            "IDIOMAS",

        experienceEyebrow:
            "EXPERIÊNCIA ROGE",

        experienceTitle1:
            "Cada detalhe",

        experienceTitle2:
            "importa.",

        freshnessTitle:
            "Frescor",

        freshnessText:
            "Ingredientes selecionados para valorizar cada preparo.",

        presentationTitle:
            "Apresentação",

        presentationText:
            "Um prato precisa conquistar antes da primeira mordida.",

        easyOrderTitle:
            "Pedido fácil",

        easyOrderText:
            "Escolha, personalize e acompanhe seu pedido.",

        favoritesTitle:
            "Seus favoritos",

        favoritesText:
            "Salve os pratos que mais combinam com você.",

        reviewsEyebrow:
            "EXPERIÊNCIA DOS CLIENTES",

        reservationEyebrow:
            "RESERVAS",

        reservationTitle1:
            "Reserve",

        reservationTitle2:
            "seu",

        reservationTitle3:
            "momento.",

        reservationDescription:
            "Escolha uma data e horário para viver a experiência ROGE.",

        name:
            "Nome",

        phone:
            "Telefone",

        date:
            "Data",

        time:
            "Horário",

        people:
            "Pessoas",

        notes:
            "Observações",

        requestReservation:
            "Solicitar reserva",

        contactEyebrow:
            "CONTATO",

        contactTitle1:
            "Estamos",

        contactTitle2:
            "esperando você.",

        hours:
            "Horários",

        hoursText:
            "Terça a domingo • 18h às 23h",

        location:
            "Localização",

        locationText:
            "Localização em definição.",

        whatsappText:
            "Canal de atendimento em configuração.",

        talkToUs:
            "Falar conosco",

        instagramText:
            "Perfil oficial em breve.",

        followUs:
            "Seguir ROGE Sushi",

        faqTitle1:
            "Dúvidas",

        faqTitle2:
            "frequentes.",

        faqQuestion1:
            "Posso fazer pedidos pelo site?",

        faqAnswer1:
            "O fluxo de pedido está disponível como demonstração.",

        faqQuestion2:
            "O pagamento é feito online?",

        faqAnswer2:
            "Não. Nenhuma cobrança real é realizada.",

        faqQuestion3:
            "Os favoritos ficam salvos?",

        faqAnswer3:
            "Sim. Eles permanecem salvos no navegador.",

        faqQuestion4:
            "Posso mudar o site para inglês?",

        faqAnswer4:
            "Sim. Use o botão PT/EN no topo.",

        finalTitle1:
            "Seu próximo",

        finalTitle2:
            "favorito.",

        developedBy:
            "Desenvolvido por",

        navigation:
            "NAVEGAÇÃO",

        developer:
            "DESENVOLVIMENTO",

        rights:
            "Todos os direitos reservados.",

        mobileHome:
            "Início",

        mobileMenu:
            "Cardápio",

        mobileCart:
            "Carrinho",

        mobileReservation:
            "Reserva",

        mobileMore:
            "Mais",

        viewOrder:
            "Ver pedido",

        quantity:
            "Quantidade",

        add:
            "Adicionar",

        yourOrder:
            "SEU PEDIDO",

        cart:
            "Carrinho",

        clearCart:
            "Limpar",

        completeOrder:
            "COMPLETE SEU PEDIDO",

        subtotal:
            "Subtotal",

        checkout:
            "Finalizar pedido",

        delivery:
            "Entrega",

        details:
            "Dados",

        payment:
            "Pagamento",

        receiveQuestion:
            "Como deseja receber?",

        receiveAtAddress:
            "Receber no endereço",

        pickup:
            "Retirada",

        noDeliveryFee:
            "Sem taxa de entrega",

        checkoutDemo:
            "Checkout demonstrativo. Nenhuma cobrança real será realizada.",

        yourDetails:
            "Seus dados",

        street:
            "Rua / Avenida",

        number:
            "Número",

        neighborhood:
            "Bairro",

        complement:
            "Complemento",

        reviewOrder:
            "Revise seu pedido",

        coupon:
            "Cupom",

        apply:
            "Aplicar",

        credit:
            "Crédito",

        debit:
            "Débito",

        cash:
            "Dinheiro",

        changeFor:
            "Troco para",

        discount:
            "Desconto",

        total:
            "Total",

        back:
            "Voltar",

        simulationComplete:
            "SIMULAÇÃO CONCLUÍDA",

        orderReady:
            "Pedido montado.",

        noRealPayment:
            "Nenhuma compra ou cobrança real foi realizada.",

        finish:
            "Concluir",

        reservationRequest:
            "SOLICITAÇÃO DE RESERVA",

        reservationRegistered:
            "Reserva registrada.",

        statusOpen:
            "ABERTO AGORA",

        statusClosed:
            "FECHADO AGORA",

        product:
            "produto",

        products:
            "produtos",

        item:
            "item",

        items:
            "itens",

        emptyCart:
            "Seu carrinho está vazio.",

        freeShippingUnlocked:
            "Você desbloqueou entrega grátis.",

        addForFreeShipping:
            "Adicione {value} para ganhar entrega grátis.",

        couponApplied:
            "Cupom aplicado com sucesso.",

        invalidCoupon:
            "Cupom inválido.",

        favoriteAdded:
            "Adicionado aos favoritos.",

        favoriteRemoved:
            "Removido dos favoritos.",

        productAdded:
            "adicionado ao carrinho.",

        productRemoved:
            "Produto removido.",

        cartCleared:
            "Carrinho limpo.",

        requiredFields:
            "Preencha os campos obrigatórios.",

        free:
            "Grátis",

        continue:
            "Continuar",

        finishOrder:
            "Finalizar",

        categories: {
            combinados: "Combinados",
            sushi: "Sushi",
            sashimi: "Sashimi",
            temaki: "Temaki",
            quentes: "Quentes",
            bebidas: "Bebidas"
        }

    },


    en: {

        skipContent:
            "Skip to content",

        navHome:
            "Home",

        navPopular:
            "Best sellers",

        navMenu:
            "Menu",

        navExperience:
            "Experience",

        navReservation:
            "Reservation",

        navContact:
            "Contact",

        heroEyebrow:
            "JAPANESE FOOD • CONTEMPORARY EXPERIENCE",

        heroTitle1:
            "Japanese art",

        heroTitle2:
            "in every",

        heroTitle3:
            "detail.",

        heroDescription:
            "Selected ingredients, precision and flavor in a contemporary Japanese experience.",

        viewMenu:
            "View menu",

        reserveTable:
            "Reserve a table",

        heroFeature1:
            "SELECTED INGREDIENTS",

        heroFeature2:
            "PRECISE PREPARATION",

        explore:
            "EXPLORE",

        popularEyebrow:
            "HOUSE FAVORITES",

        popularTitle1:
            "Our best",

        popularTitle2:
            "sellers.",

        popularDescription:
            "A selection of the dishes customers love first.",

        omakaseTitle1:
            "Let the",

        omakaseTitle2:
            "experience",

        omakaseTitle3:
            "surprise you.",

        omakaseText:
            "An experience inspired by the Japanese concept of trusting the chef with every detail.",

        discover:
            "Discover",

        menuEyebrow:
            "OUR MENU",

        menuTitle1:
            "Choose your",

        menuTitle2:
            "favorite.",

        menuDescription:
            "Explore classic flavors and contemporary combinations.",

        categoryAll:
            "All",

        categoryPopular:
            "Best sellers",

        categoryFavorites:
            "Favorites",

        categoryCombos:
            "Combos",

        categoryHot:
            "Hot dishes",

        categoryDrinks:
            "Drinks",

        clearFilters:
            "Clear filters",

        noResultsTitle:
            "No results",

        noResultsText:
            "Try another search term or category.",

        philosophy1:
            "Eating is also",

        philosophy2:
            "an",

        philosophy3:
            "experience.",

        storyEyebrow:
            "OUR ESSENCE",

        storyTitle1:
            "Japan",

        storyTitle2:
            "meets the",

        storyTitle3:
            "contemporary.",

        storyText:
            "Tradition, creativity and presentation come together to create a contemporary Japanese experience.",

        menuOptions:
            "MENU OPTIONS",

        responsive:
            "RESPONSIVE",

        languages:
            "LANGUAGES",

        experienceEyebrow:
            "ROGE EXPERIENCE",

        experienceTitle1:
            "Every detail",

        experienceTitle2:
            "matters.",

        freshnessTitle:
            "Freshness",

        freshnessText:
            "Selected ingredients designed to enhance every preparation.",

        presentationTitle:
            "Presentation",

        presentationText:
            "A dish should impress before the first bite.",

        easyOrderTitle:
            "Easy ordering",

        easyOrderText:
            "Choose, customize and review your order.",

        favoritesTitle:
            "Your favorites",

        favoritesText:
            "Save the dishes you love the most.",

        reviewsEyebrow:
            "CUSTOMER EXPERIENCE",

        reservationEyebrow:
            "RESERVATIONS",

        reservationTitle1:
            "Reserve",

        reservationTitle2:
            "your",

        reservationTitle3:
            "moment.",

        reservationDescription:
            "Choose a date and time to experience ROGE.",

        name:
            "Name",

        phone:
            "Phone",

        date:
            "Date",

        time:
            "Time",

        people:
            "Guests",

        notes:
            "Notes",

        requestReservation:
            "Request reservation",

        contactEyebrow:
            "CONTACT",

        contactTitle1:
            "We are",

        contactTitle2:
            "waiting for you.",

        hours:
            "Opening hours",

        hoursText:
            "Tuesday to Sunday • 6 PM to 11 PM",

        location:
            "Location",

        locationText:
            "Location to be announced.",

        whatsappText:
            "Customer service channel being configured.",

        talkToUs:
            "Contact us",

        instagramText:
            "Official profile coming soon.",

        followUs:
            "Follow ROGE Sushi",

        faqTitle1:
            "Frequently",

        faqTitle2:
            "asked questions.",

        faqQuestion1:
            "Can I place orders through the website?",

        faqAnswer1:
            "The ordering flow is currently available as a demonstration.",

        faqQuestion2:
            "Is payment processed online?",

        faqAnswer2:
            "No. No real payment is processed.",

        faqQuestion3:
            "Are favorites saved?",

        faqAnswer3:
            "Yes. They remain saved in your browser.",

        faqQuestion4:
            "Can I switch the website to English?",

        faqAnswer4:
            "Yes. Use the PT/EN button at the top.",

        finalTitle1:
            "Your next",

        finalTitle2:
            "favorite.",

        developedBy:
            "Developed by",

        navigation:
            "NAVIGATION",

        developer:
            "DEVELOPMENT",

        rights:
            "All rights reserved.",

        mobileHome:
            "Home",

        mobileMenu:
            "Menu",

        mobileCart:
            "Cart",

        mobileReservation:
            "Reservation",

        mobileMore:
            "More",

        viewOrder:
            "View order",

        quantity:
            "Quantity",

        add:
            "Add",

        yourOrder:
            "YOUR ORDER",

        cart:
            "Cart",

        clearCart:
            "Clear",

        completeOrder:
            "COMPLETE YOUR ORDER",

        subtotal:
            "Subtotal",

        checkout:
            "Checkout",

        delivery:
            "Delivery",

        details:
            "Details",

        payment:
            "Payment",

        receiveQuestion:
            "How would you like to receive it?",

        receiveAtAddress:
            "Delivery to address",

        pickup:
            "Pickup",

        noDeliveryFee:
            "No delivery fee",

        checkoutDemo:
            "Demo checkout. No real payment will be processed.",

        yourDetails:
            "Your details",

        street:
            "Street / Avenue",

        number:
            "Number",

        neighborhood:
            "Neighborhood",

        complement:
            "Additional details",

        reviewOrder:
            "Review your order",

        coupon:
            "Coupon",

        apply:
            "Apply",

        credit:
            "Credit",

        debit:
            "Debit",

        cash:
            "Cash",

        changeFor:
            "Change for",

        discount:
            "Discount",

        total:
            "Total",

        back:
            "Back",

        simulationComplete:
            "SIMULATION COMPLETE",

        orderReady:
            "Order ready.",

        noRealPayment:
            "No real purchase or payment was processed.",

        finish:
            "Finish",

        reservationRequest:
            "RESERVATION REQUEST",

        reservationRegistered:
            "Reservation registered.",

        statusOpen:
            "OPEN NOW",

        statusClosed:
            "CLOSED NOW",

        product:
            "product",

        products:
            "products",

        item:
            "item",

        items:
            "items",

        emptyCart:
            "Your cart is empty.",

        freeShippingUnlocked:
            "You unlocked free delivery.",

        addForFreeShipping:
            "Add {value} for free delivery.",

        couponApplied:
            "Coupon applied successfully.",

        invalidCoupon:
            "Invalid coupon.",

        favoriteAdded:
            "Added to favorites.",

        favoriteRemoved:
            "Removed from favorites.",

        productAdded:
            "added to cart.",

        productRemoved:
            "Product removed.",

        cartCleared:
            "Cart cleared.",

        requiredFields:
            "Complete the required fields.",

        free:
            "Free",

        continue:
            "Continue",

        finishOrder:
            "Finish",

        categories: {
            combinados: "Combos",
            sushi: "Sushi",
            sashimi: "Sashimi",
            temaki: "Temaki",
            quentes: "Hot dishes",
            bebidas: "Drinks"
        }

    }

};


const products = [

    {
        id: 1,
        category: "combinados",
        price: 89.90,
        popular: true,
        featured: true,
        rating: 4.9,
        reviews: 186,

        image:
            "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=90",

        pt: {
            name: "Combinado ROGE",
            description:
                "Sushi, sashimi, uramaki e nigiri em uma seleção especial.",
            tag: "MAIS PEDIDO"
        },

        en: {
            name: "ROGE Combo",
            description:
                "Sushi, sashimi, uramaki and nigiri in a special selection.",
            tag: "BEST SELLER"
        }
    },

    {
        id: 2,
        category: "sashimi",
        price: 42.90,
        popular: true,
        featured: true,
        rating: 4.9,
        reviews: 143,

        image:
            "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1000&q=90",

        pt: {
            name: "Sashimi de Salmão",
            description:
                "Fatias selecionadas de salmão servidas com precisão.",
            tag: "FRESCOR"
        },

        en: {
            name: "Salmon Sashimi",
            description:
                "Selected salmon slices served with precision.",
            tag: "FRESH"
        }
    },

    {
        id: 3,
        category: "sushi",
        price: 34.90,
        popular: true,
        featured: true,
        rating: 4.8,
        reviews: 129,

        image:
            "https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&w=1000&q=90",

        pt: {
            name: "Uramaki Filadélfia",
            description:
                "Salmão, cream cheese, arroz japonês e gergelim.",
            tag: "CLÁSSICO"
        },

        en: {
            name: "Philadelphia Uramaki",
            description:
                "Salmon, cream cheese, Japanese rice and sesame.",
            tag: "CLASSIC"
        }
    },

    {
        id: 4,
        category: "quentes",
        price: 32.90,
        popular: true,
        featured: true,
        rating: 4.8,
        reviews: 117,

        image:
            "https://images.unsplash.com/photo-1615361200141-f45040f367be?auto=format&fit=crop&w=1000&q=90",

        pt: {
            name: "Hot Filadélfia",
            description:
                "Roll crocante com salmão e cream cheese.",
            tag: "QUENTE"
        },

        en: {
            name: "Hot Philadelphia",
            description:
                "Crispy roll with salmon and cream cheese.",
            tag: "HOT"
        }
    },

    {
        id: 5,
        category: "temaki",
        price: 32.90,
        popular: true,
        rating: 4.9,
        reviews: 155,

        image:
            "https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=1000&q=90",

        pt: {
            name: "Temaki Salmão",
            description:
                "Salmão, arroz japonês, cebolinha e alga nori.",
            tag: "FAVORITO"
        },

        en: {
            name: "Salmon Temaki",
            description:
                "Salmon, Japanese rice, green onion and nori.",
            tag: "FAVORITE"
        }
    },

    {
        id: 6,
        category: "sushi",
        price: 31.90,
        popular: true,
        rating: 4.8,
        reviews: 108,

        image:
            "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1000&q=90",

        pt: {
            name: "Nigiri de Salmão",
            description:
                "Arroz japonês moldado à mão com salmão fresco.",
            tag: "TRADIÇÃO"
        },

        en: {
            name: "Salmon Nigiri",
            description:
                "Hand-shaped Japanese rice topped with fresh salmon.",
            tag: "TRADITION"
        }
    },

    {
        id: 7,
        category: "sushi",
        price: 35.90,
        rating: 4.8,
        reviews: 84,

        image:
            "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?auto=format&fit=crop&w=1000&q=90",

        pt: {
            name: "Jhou de Salmão",
            description:
                "Arroz envolvido em salmão com cobertura cremosa.",
            tag: "ESPECIAL"
        },

        en: {
            name: "Salmon Jhou",
            description:
                "Rice wrapped in salmon with a creamy topping.",
            tag: "SPECIAL"
        }
    },

    {
        id: 8,
        category: "sushi",
        price: 28.90,
        rating: 4.7,
        reviews: 78,

        image:
            "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?auto=format&fit=crop&w=1000&q=90",

        pt: {
            name: "Hossomaki Salmão",
            description:
                "Roll tradicional de nori, arroz japonês e salmão.",
            tag: "CLÁSSICO"
        },

        en: {
            name: "Salmon Hossomaki",
            description:
                "Traditional nori roll with Japanese rice and salmon.",
            tag: "CLASSIC"
        }
    },

    {
        id: 9,
        category: "combinados",
        price: 69.90,
        popular: true,
        rating: 4.8,
        reviews: 112,

        image:
            "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1100&q=90",

        pt: {
            name: "Combinado 20 Peças",
            description:
                "Seleção equilibrada de peças clássicas da culinária japonesa.",
            tag: "SELEÇÃO"
        },

        en: {
            name: "20 Piece Combo",
            description:
                "Balanced selection of classic Japanese pieces.",
            tag: "SELECTION"
        }
    },

    {
        id: 10,
        category: "combinados",
        price: 119.90,
        popular: true,
        rating: 4.9,
        reviews: 194,

        image:
            "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=90",

        pt: {
            name: "Festival ROGE 40 Peças",
            description:
                "Seleção completa criada para compartilhar.",
            tag: "COMPARTILHAR"
        },

        en: {
            name: "ROGE Festival 40 Pieces",
            description:
                "Complete selection designed for sharing.",
            tag: "TO SHARE"
        }
    },

    {
        id: 11,
        category: "sashimi",
        price: 49.90,
        rating: 4.8,
        reviews: 91,

        image:
            "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1100&q=90",

        pt: {
            name: "Sashimi Mix",
            description:
                "Seleção especial de cortes frescos.",
            tag: "PREMIUM"
        },

        en: {
            name: "Sashimi Mix",
            description:
                "Special selection of fresh cuts.",
            tag: "PREMIUM"
        }
    },

    {
        id: 12,
        category: "temaki",
        price: 35.90,
        rating: 4.8,
        reviews: 101,

        image:
            "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1000&q=90",

        pt: {
            name: "Temaki Filadélfia",
            description:
                "Salmão, cream cheese, arroz japonês e cebolinha.",
            tag: "CREMOSO"
        },

        en: {
            name: "Philadelphia Temaki",
            description:
                "Salmon, cream cheese, Japanese rice and green onion.",
            tag: "CREAMY"
        }
    },

    {
        id: 13,
        category: "quentes",
        price: 27.90,
        rating: 4.7,
        reviews: 74,

        image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=90",

        pt: {
            name: "Guioza",
            description:
                "Pastéis japoneses dourados e recheados.",
            tag: "ENTRADA"
        },

        en: {
            name: "Gyoza",
            description:
                "Golden Japanese dumplings with seasoned filling.",
            tag: "STARTER"
        }
    },

    {
        id: 14,
        category: "quentes",
        price: 44.90,
        rating: 4.7,
        reviews: 86,

        image:
            "https://images.unsplash.com/photo-1607301405390-d831c242f59b?auto=format&fit=crop&w=1000&q=90",

        pt: {
            name: "Yakisoba Especial",
            description:
                "Macarrão oriental, legumes e molho especial.",
            tag: "ROGE"
        },

        en: {
            name: "Special Yakisoba",
            description:
                "Asian noodles, vegetables and special sauce.",
            tag: "ROGE"
        }
    },

    {
        id: 15,
        category: "bebidas",
        price: 7,
        rating: 4.7,
        reviews: 62,

        image:
            "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=90",

        pt: {
            name: "Refrigerante Cola",
            description:
                "Refrigerante cola servido bem gelado.",
            tag: "GELADO"
        },

        en: {
            name: "Cola Soft Drink",
            description:
                "Cola soft drink served ice cold.",
            tag: "CHILLED"
        }
    },

    {
        id: 16,
        category: "bebidas",
        price: 6,
        rating: 4.7,
        reviews: 51,

        image:
            "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=900&q=90",

        pt: {
            name: "Água Mineral",
            description:
                "Água mineral sem gás.",
            tag: "ÁGUA"
        },

        en: {
            name: "Still Water",
            description:
                "Still mineral water.",
            tag: "WATER"
        }
    },

    {
        id: 17,
        category: "bebidas",
        price: 10.90,
        rating: 4.8,
        reviews: 69,

        image:
            "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=90",

        pt: {
            name: "Suco de Laranja",
            description:
                "Suco de laranja refrescante.",
            tag: "SUCO"
        },

        en: {
            name: "Orange Juice",
            description:
                "Refreshing orange juice.",
            tag: "JUICE"
        }
    },

    {
        id: 18,
        category: "bebidas",
        price: 12.90,
        rating: 4.8,
        reviews: 71,

        image:
            "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=900&q=90",

        pt: {
            name: "Chá Gelado",
            description:
                "Chá gelado leve e refrescante.",
            tag: "FRESH"
        },

        en: {
            name: "Iced Tea",
            description:
                "Light and refreshing iced tea.",
            tag: "FRESH"
        }
    }

];


const reviews = [

    {
        pt: {
            text:
                "Uma experiência visual incrível. O cardápio é fácil de navegar e muito elegante.",
            name:
                "Mariana Alves",
            role:
                "Cliente"
        },

        en: {
            text:
                "An incredible visual experience. The menu is easy to navigate and very elegant.",
            name:
                "Mariana Alves",
            role:
                "Customer"
        }
    },

    {
        pt: {
            text:
                "O cuidado com os detalhes faz o ROGE transmitir uma experiência premium.",
            name:
                "Lucas Fernandes",
            role:
                "Cliente"
        },

        en: {
            text:
                "The attention to detail gives ROGE a genuinely premium feel.",
            name:
                "Lucas Fernandes",
            role:
                "Customer"
        }
    },

    {
        pt: {
            text:
                "Gostei muito do visual e da facilidade para encontrar os pratos.",
            name:
                "Camila Santos",
            role:
                "Cliente"
        },

        en: {
            text:
                "I really liked the visual design and how easy it is to find the dishes.",
            name:
                "Camila Santos",
            role:
                "Customer"
        }
    }

];


let language =
    localStorage.getItem(
        "roge-language"
    )
    ||
    "pt";


let theme =
    localStorage.getItem(
        "roge-theme"
    )
    ||
    "dark";


let favorites =
    JSON.parse(
        localStorage.getItem(
            "roge-favorites"
        )
        ||
        "[]"
    );


let cart =
    JSON.parse(
        localStorage.getItem(
            "roge-cart"
        )
        ||
        "[]"
    );


let currentCategory =
    "todos";


let currentSearch =
    "";


let currentSort =
    "featured";


let modalProductId =
    null;


let modalQuantity =
    1;


let reviewIndex =
    0;


let checkoutStep =
    1;


let discount =
    0;


function t() {

    return translations[
        language
    ];

}


function productText(
    product
) {

    return product[
        language
    ];

}


function getProduct(
    id
) {

    return products.find(
        product =>
            product.id ===
            Number(id)
    );

}


function money(
    value
) {

    return new Intl.NumberFormat(
        language === "pt"
            ?
            "pt-BR"
            :
            "en-US",
        {
            style:
                "currency",

            currency:
                "BRL"
        }
    )
    .format(value);

}


function saveState() {

    localStorage.setItem(
        "roge-language",
        language
    );


    localStorage.setItem(
        "roge-theme",
        theme
    );


    localStorage.setItem(
        "roge-favorites",
        JSON.stringify(
            favorites
        )
    );


    localStorage.setItem(
        "roge-cart",
        JSON.stringify(
            cart
        )
    );

}


function imageFallback(
    image
) {

    if (
        image.dataset.fallback
    ) {

        return;

    }


    image.dataset.fallback =
        "true";


    image.src =
        FALLBACK_IMAGE;

}


function startLoader() {

    const loader =
        document.getElementById(
            "loader"
        );


    const number =
        document.getElementById(
            "loader-number"
        );


    const line =
        document.getElementById(
            "loader-line"
        );


    let progress =
        0;


    const timer =
        setInterval(
            () => {

                progress +=
                    Math.floor(
                        Math.random() *
                        11
                    )
                    +
                    6;


                if (
                    progress >= 100
                ) {

                    progress =
                        100;

                }


                number.textContent =
                    String(
                        progress
                    )
                    .padStart(
                        2,
                        "0"
                    );


                line.style.width =
                    `${progress}%`;


                if (
                    progress === 100
                ) {

                    clearInterval(
                        timer
                    );


                    setTimeout(
                        () => {

                            loader.classList
                                .add(
                                    "hidden"
                                );

                        },
                        250
                    );

                }

            },
            55
        );

}


function showSkeleton() {

    const grid =
        document.getElementById(
            "products-grid"
        );


    grid.innerHTML =
        Array.from(
            {
                length: 8
            }
        )
        .map(
            () =>
                `
                <article class="skeleton-card">

                    <div
                        class="skeleton skeleton-image"
                    ></div>

                    <div
                        class="skeleton-content"
                    >

                        <div
                            class="skeleton skeleton-line small"
                        ></div>

                        <div
                            class="skeleton skeleton-line medium"
                        ></div>

                        <div
                            class="skeleton skeleton-line large"
                        ></div>

                        <div
                            class="skeleton skeleton-line medium"
                        ></div>

                    </div>

                </article>
                `
        )
        .join("");

}


function applyLanguage() {

    document.documentElement.lang =
        language === "pt"
            ?
            "pt-BR"
            :
            "en";


    document.title =
        language === "pt"
            ?
            "ROGE Sushi | Experiência Japonesa Contemporânea"
            :
            "ROGE Sushi | Contemporary Japanese Experience";


    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(
            element => {

                const key =
                    element.dataset
                        .i18n;


                if (
                    typeof t()[key]
                    ===
                    "string"
                ) {

                    element.textContent =
                        t()[key];

                }

            }
        );


    const languageLabel =
        document.getElementById(
            "language-label"
        );


    languageLabel.textContent =
        language
            .toUpperCase();


    const search =
        document.getElementById(
            "menu-search"
        );


    search.placeholder =
        language === "pt"
            ?
            "Pesquisar no cardápio..."
            :
            "Search the menu...";


    document.getElementById(
        "reservation-name"
    ).placeholder =
        language === "pt"
            ?
            "Seu nome"
            :
            "Your name";


    document.getElementById(
        "reservation-notes"
    ).placeholder =
        language === "pt"
            ?
            "Alguma informação adicional?"
            :
            "Any additional information?";


    document.getElementById(
        "modal-observation"
    ).placeholder =
        language === "pt"
            ?
            "Ex: sem cream cheese..."
            :
            "Example: no cream cheese...";


    document.getElementById(
        "client-name"
    ).placeholder =
        language === "pt"
            ?
            "Seu nome"
            :
            "Your name";


    document.getElementById(
        "client-address"
    ).placeholder =
        language === "pt"
            ?
            "Rua / Avenida"
            :
            "Street / Avenue";


    document.getElementById(
        "client-neighborhood"
    ).placeholder =
        language === "pt"
            ?
            "Centro"
            :
            "Neighborhood";


    document.getElementById(
        "client-complement"
    ).placeholder =
        language === "pt"
            ?
            "Opcional"
            :
            "Optional";


    document.getElementById(
        "order-observation"
    ).placeholder =
        language === "pt"
            ?
            "Informações adicionais..."
            :
            "Additional information...";


    const sort =
        document.getElementById(
            "sort-products"
        );


    const sortLabels =
        language === "pt"
        ?
        [
            "Destaques",
            "Menor preço",
            "Maior preço",
            "Nome A–Z"
        ]
        :
        [
            "Featured",
            "Lowest price",
            "Highest price",
            "Name A–Z"
        ];


    Array.from(
        sort.options
    )
    .forEach(
        (
            option,
            index
        ) => {

            option.textContent =
                sortLabels[index];

        }
    );


    const reservationTime =
        document.querySelector(
            "#reservation-time option"
        );


    reservationTime.textContent =
        language === "pt"
            ?
            "Escolha"
            :
            "Choose";


    const reservationPeople =
        document.querySelector(
            "#reservation-people option"
        );


    reservationPeople.textContent =
        language === "pt"
            ?
            "Quantidade"
            :
            "Guests";


    updateRestaurantStatus();

    renderPopular();

    renderProducts();

    renderCart();

    updateCart();

    renderReview();

    updateCheckout();

}


function alternarIdioma() {

    language =
        language === "pt"
            ?
            "en"
            :
            "pt";


    saveState();

    applyLanguage();

}


function applyTheme() {

    document.body
        .classList
        .toggle(
            "light-theme",
            theme === "light"
        );


    const button =
        document.getElementById(
            "theme-toggle"
        );


    button.innerHTML =
        theme === "light"
            ?
            '<i class="fa-regular fa-sun"></i>'
            :
            '<i class="fa-regular fa-moon"></i>';

}


function updateRestaurantStatus() {

    const now =
        new Date();


    const day =
        now.getDay();


    const hour =
        now.getHours();


    const openDay =
        day !== 1;


    const openHour =
        hour >=
        CONFIG.openingHour
        &&
        hour <
        CONFIG.closingHour;


    const open =
        openDay
        &&
        openHour;


    const element =
        document.getElementById(
            "restaurant-status"
        );


    element.classList
        .toggle(
            "closed",
            !open
        );


    document.getElementById(
        "restaurant-status-text"
    ).textContent =
        open
            ?
            t().statusOpen
            :
            t().statusClosed;

}


function productHTML(
    product
) {

    const content =
        productText(
            product
        );


    const favorite =
        favorites.includes(
            product.id
        );


    return `
        <article class="product-card">

            <div
                class="product-image"
                onclick="abrirProduto(${product.id})"
            >

                <img
                    src="${product.image}"
                    alt="${content.name}"
                    loading="lazy"
                    onerror="imageFallback(this)"
                >

                ${
                    product.popular
                    ?
                    `
                    <span class="product-badge">
                        ${content.tag}
                    </span>
                    `
                    :
                    ""
                }

                <button
                    type="button"
                    class="favorite-button ${
                        favorite
                            ?
                            "active"
                            :
                            ""
                    }"
                    onclick="event.stopPropagation(); toggleFavorite(${product.id})"
                    aria-label="Favorito"
                >

                    <i class="${
                        favorite
                            ?
                            "fa-solid"
                            :
                            "fa-regular"
                    } fa-heart"></i>

                </button>

            </div>

            <div class="product-content">

                <span class="product-category">
                    ${
                        t().categories[
                            product.category
                        ]
                    }
                </span>

                <h3>
                    ${content.name}
                </h3>

                <p>
                    ${content.description}
                </p>

                <div class="product-rating">
                    ★ ${product.rating}

                    <span>
                        (${product.reviews})
                    </span>
                </div>

                <div class="product-bottom">

                    <strong>
                        ${money(product.price)}
                    </strong>

                    <button
                        type="button"
                        onclick="abrirProduto(${product.id})"
                        aria-label="${t().add}"
                    >
                        <i class="fa-solid fa-plus"></i>
                    </button>

                </div>

            </div>

        </article>
    `;

}


function renderPopular() {

    const container =
        document.getElementById(
            "popular-products"
        );


    container.innerHTML =
        products
            .filter(
                product =>
                    product.featured
            )
            .slice(
                0,
                4
            )
            .map(
                productHTML
            )
            .join("");

}


function renderProducts() {

    let list =
        [...products];


    if (
        currentCategory
        ===
        "favoritos"
    ) {

        list =
            list.filter(
                product =>
                    favorites.includes(
                        product.id
                    )
            );

    }

    else if (
        currentCategory
        ===
        "mais-pedidos"
    ) {

        list =
            list.filter(
                product =>
                    product.popular
            );

    }

    else if (
        currentCategory
        !==
        "todos"
    ) {

        list =
            list.filter(
                product =>
                    product.category
                    ===
                    currentCategory
            );

    }


    if (
        currentSearch.trim()
    ) {

        const query =
            currentSearch
                .toLowerCase();


        list =
            list.filter(
                product => {

                    const content =
                        productText(
                            product
                        );


                    return (
                        content.name
                            .toLowerCase()
                            .includes(
                                query
                            )
                        ||
                        content.description
                            .toLowerCase()
                            .includes(
                                query
                            )
                    );

                }
            );

    }


    if (
        currentSort
        ===
        "price-asc"
    ) {

        list.sort(
            (
                a,
                b
            ) =>
                a.price
                -
                b.price
        );

    }


    if (
        currentSort
        ===
        "price-desc"
    ) {

        list.sort(
            (
                a,
                b
            ) =>
                b.price
                -
                a.price
        );

    }


    if (
        currentSort
        ===
        "name"
    ) {

        list.sort(
            (
                a,
                b
            ) =>
                productText(a)
                    .name
                    .localeCompare(
                        productText(b)
                            .name
                    )
        );

    }


    if (
        currentSort
        ===
        "featured"
    ) {

        list.sort(
            (
                a,
                b
            ) => {

                const scoreA =
                    Number(
                        !!a.popular
                    )
                    +
                    Number(
                        !!a.featured
                    );


                const scoreB =
                    Number(
                        !!b.popular
                    )
                    +
                    Number(
                        !!b.featured
                    );


                return (
                    scoreB
                    -
                    scoreA
                );

            }
        );

    }


    const grid =
        document.getElementById(
            "products-grid"
        );


    grid.style.opacity =
        "0";


    setTimeout(
        () => {

            grid.innerHTML =
                list
                    .map(
                        productHTML
                    )
                    .join("");


            grid.style.opacity =
                "1";

        },
        140
    );


    document.getElementById(
        "results-count"
    ).textContent =
        `${list.length} ${
            list.length === 1
                ?
                t().product
                :
                t().products
        }`;


    document.getElementById(
        "no-results"
    )
    .classList
    .toggle(
        "show",
        list.length === 0
    );

}


function setupFilters() {

    document
        .querySelectorAll(
            ".category"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        currentCategory =
                            button.dataset
                                .category;


                        document
                            .querySelectorAll(
                                ".category"
                            )
                            .forEach(
                                category =>
                                    category
                                        .classList
                                        .remove(
                                            "active"
                                        )
                            );


                        button.classList
                            .add(
                                "active"
                            );


                        renderProducts();

                    }
                );

            }
        );


    document.getElementById(
        "menu-search"
    )
    .addEventListener(
        "input",
        event => {

            currentSearch =
                event.target.value;


            renderProducts();

        }
    );


    document.getElementById(
        "sort-products"
    )
    .addEventListener(
        "change",
        event => {

            currentSort =
                event.target.value;


            renderProducts();

        }
    );

}


function limparBusca() {

    currentSearch =
        "";


    document.getElementById(
        "menu-search"
    ).value =
        "";


    renderProducts();

}


function limparFiltros() {

    currentCategory =
        "todos";


    currentSearch =
        "";


    currentSort =
        "featured";


    document.getElementById(
        "menu-search"
    ).value =
        "";


    document.getElementById(
        "sort-products"
    ).value =
        "featured";


    document
        .querySelectorAll(
            ".category"
        )
        .forEach(
            button => {

                button.classList
                    .toggle(
                        "active",
                        button.dataset
                            .category
                        ===
                        "todos"
                    );

            }
        );


    renderProducts();

}


function toggleFavorite(
    id
) {

    id =
        Number(id);


    if (
        favorites.includes(
            id
        )
    ) {

        favorites =
            favorites.filter(
                favorite =>
                    favorite !== id
            );


        showToast(
            t().favoriteRemoved
        );

    }

    else {

        favorites.push(
            id
        );


        showToast(
            t().favoriteAdded
        );

    }


    saveState();

    renderPopular();

    renderProducts();

}


function abrirProduto(
    id
) {

    const product =
        getProduct(
            id
        );


    if (!product) {

        return;

    }


    modalProductId =
        product.id;


    modalQuantity =
        1;


    const content =
        productText(
            product
        );


    const image =
        document.getElementById(
            "modal-product-image"
        );


    image.src =
        product.image;


    image.alt =
        content.name;


    image.onerror =
        () =>
            imageFallback(
                image
            );


    document.getElementById(
        "modal-product-tag"
    ).textContent =
        content.tag;


    document.getElementById(
        "modal-product-name"
    ).textContent =
        content.name;


    document.getElementById(
        "modal-product-description"
    ).textContent =
        content.description;


    document.getElementById(
        "modal-product-category"
    ).textContent =
        t().categories[
            product.category
        ];


    document.getElementById(
        "modal-product-price"
    ).textContent =
        money(
            product.price
        );


    document.getElementById(
        "modal-observation"
    ).value =
        "";


    document.getElementById(
        "modal-counter"
    ).textContent =
        "0 / 100";


    updateModalQuantity();


    openOverlay(
        "product-modal"
    );

}


function fecharProduto() {

    closeOverlay(
        "product-modal"
    );

}


function mudarQuantidadeModal(
    amount
) {

    modalQuantity +=
        amount;


    modalQuantity =
        Math.max(
            1,
            Math.min(
                20,
                modalQuantity
            )
        );


    updateModalQuantity();

}


function updateModalQuantity() {

    const product =
        getProduct(
            modalProductId
        );


    if (!product) {

        return;

    }


    document.getElementById(
        "modal-quantity"
    ).textContent =
        modalQuantity;


    document.getElementById(
        "modal-total"
    ).textContent =
        money(
            product.price
            *
            modalQuantity
        );

}


function adicionarModalCarrinho() {

    const product =
        getProduct(
            modalProductId
        );


    if (!product) {

        return;

    }


    const observation =
        document.getElementById(
            "modal-observation"
        )
        .value
        .trim();


    addProductToCart(
        product.id,
        modalQuantity,
        observation
    );


    fecharProduto();


    showToast(
        `${productText(product).name} ${t().productAdded}`
    );

}


function addProductToCart(
    productId,
    quantity = 1,
    observation = ""
) {

    const existing =
        cart.find(
            item =>
                item.id ===
                productId
                &&
                item.observation ===
                observation
        );


    if (existing) {

        existing.quantity +=
            quantity;

    }

    else {

        cart.push(
            {
                id:
                    productId,

                quantity:
                    quantity,

                observation:
                    observation
            }
        );

    }


    saveState();

    renderCart();

    updateCart();

}


function cartQuantity() {

    return cart.reduce(
        (
            total,
            item
        ) =>
            total
            +
            item.quantity,
        0
    );

}


function cartSubtotal() {

    return cart.reduce(
        (
            total,
            item
        ) => {

            const product =
                getProduct(
                    item.id
                );


            if (!product) {

                return total;

            }


            return (
                total
                +
                product.price
                *
                item.quantity
            );

        },
        0
    );

}


function renderCart() {

    const container =
        document.getElementById(
            "cart-items"
        );


    if (
        cart.length === 0
    ) {

        container.innerHTML =
            `
            <div class="cart-empty">

                <div>
                    <i
                        class="fa-solid fa-bag-shopping"
                        style="font-size:2rem;margin-bottom:15px"
                    ></i>

                    <p>
                        ${t().emptyCart}
                    </p>
                </div>

            </div>
            `;


        renderCartRecommendations();

        return;

    }


    container.innerHTML =
        cart
            .map(
                (
                    item,
                    index
                ) => {

                    const product =
                        getProduct(
                            item.id
                        );


                    if (!product) {

                        return "";

                    }


                    const content =
                        productText(
                            product
                        );


                    return `
                        <article class="cart-item">

                            <img
                                src="${product.image}"
                                alt="${content.name}"
                                onerror="imageFallback(this)"
                            >

                            <div>

                                <div class="cart-item-header">

                                    <strong>
                                        ${content.name}
                                    </strong>

                                    <button
                                        type="button"
                                        onclick="removerItem(${index})"
                                        aria-label="Remover"
                                    >
                                        <i class="fa-solid fa-xmark"></i>
                                    </button>

                                </div>

                                ${
                                    item.observation
                                    ?
                                    `
                                    <p class="cart-item-note">
                                        ${item.observation}
                                    </p>
                                    `
                                    :
                                    ""
                                }

                                <div class="cart-item-footer">

                                    <div class="cart-quantity">

                                        <button
                                            type="button"
                                            onclick="mudarQuantidadeCarrinho(${index}, -1)"
                                        >
                                            −
                                        </button>

                                        <span>
                                            ${item.quantity}
                                        </span>

                                        <button
                                            type="button"
                                            onclick="mudarQuantidadeCarrinho(${index}, 1)"
                                        >
                                            +
                                        </button>

                                    </div>

                                    <strong>
                                        ${
                                            money(
                                                product.price
                                                *
                                                item.quantity
                                            )
                                        }
                                    </strong>

                                </div>

                            </div>

                        </article>
                    `;

                }
            )
            .join("");


    renderCartRecommendations();

}


function renderCartRecommendations() {

    const container =
        document.getElementById(
            "cart-recommendation-list"
        );


    const idsInCart =
        cart.map(
            item =>
                item.id
        );


    const recommendations =
        products
            .filter(
                product =>
                    product.category
                    ===
                    "bebidas"
                    &&
                    !idsInCart.includes(
                        product.id
                    )
            )
            .slice(
                0,
                2
            );


    container.innerHTML =
        recommendations
            .map(
                product => {

                    const content =
                        productText(
                            product
                        );


                    return `
                        <div class="recommendation-item">

                            <img
                                src="${product.image}"
                                alt="${content.name}"
                                loading="lazy"
                                onerror="imageFallback(this)"
                            >

                            <div>
                                <strong>
                                    ${content.name}
                                </strong>

                                <small>
                                    ${money(product.price)}
                                </small>
                            </div>

                            <button
                                type="button"
                                onclick="adicionarRecomendacao(${product.id})"
                                aria-label="${t().add}"
                            >
                                <i class="fa-solid fa-plus"></i>
                            </button>

                        </div>
                    `;

                }
            )
            .join("");

}


function adicionarRecomendacao(
    id
) {

    addProductToCart(
        id,
        1,
        ""
    );


    const product =
        getProduct(
            id
        );


    showToast(
        `${productText(product).name} ${t().productAdded}`
    );

}


function updateCart() {

    const quantity =
        cartQuantity();


    const subtotal =
        cartSubtotal();


    [
        "header-cart-count",
        "mobile-cart-count"
    ]
    .forEach(
        id => {

            const element =
                document.getElementById(
                    id
                );


            if (element) {

                element.textContent =
                    quantity;

            }

        }
    );


    document.getElementById(
        "floating-cart-count"
    ).textContent =
        `${quantity} ${
            quantity === 1
                ?
                t().item
                :
                t().items
        }`;


    document.getElementById(
        "floating-cart-total"
    ).textContent =
        money(
            subtotal
        );


    document.getElementById(
        "floating-cart"
    )
    .classList
    .toggle(
        "visible",
        quantity > 0
    );


    document.getElementById(
        "cart-item-count"
    ).textContent =
        `${quantity} ${
            quantity === 1
                ?
                t().item
                :
                t().items
        }`;


    document.getElementById(
        "cart-subtotal"
    ).textContent =
        money(
            subtotal
        );


    updateShippingProgress();

    updateCheckout();

}


function updateShippingProgress() {

    const subtotal =
        cartSubtotal();


    const progress =
        Math.min(
            100,
            subtotal /
            CONFIG.freeShipping
            *
            100
        );


    document.getElementById(
        "shipping-progress-bar"
    ).style.width =
        `${progress}%`;


    const text =
        document.getElementById(
            "shipping-progress-text"
        );


    if (
        subtotal >=
        CONFIG.freeShipping
    ) {

        text.textContent =
            t().freeShippingUnlocked;

    }

    else {

        const remaining =
            CONFIG.freeShipping
            -
            subtotal;


        text.textContent =
            t()
                .addForFreeShipping
                .replace(
                    "{value}",
                    money(
                        remaining
                    )
                );

    }

}


function mudarQuantidadeCarrinho(
    index,
    amount
) {

    if (
        !cart[index]
    ) {

        return;

    }


    cart[index].quantity +=
        amount;


    if (
        cart[index].quantity
        <=
        0
    ) {

        cart.splice(
            index,
            1
        );

    }


    saveState();

    renderCart();

    updateCart();

}


function removerItem(
    index
) {

    cart.splice(
        index,
        1
    );


    saveState();

    renderCart();

    updateCart();


    showToast(
        t().productRemoved
    );

}


function limparCarrinho() {

    if (
        cart.length === 0
    ) {

        return;

    }


    cart =
        [];


    saveState();

    renderCart();

    updateCart();


    showToast(
        t().cartCleared
    );

}


function abrirCarrinho() {

    renderCart();

    updateCart();


    openOverlay(
        "cart-overlay"
    );

}


function fecharCarrinho() {

    closeOverlay(
        "cart-overlay"
    );

}


function currentDeliveryType() {

    return document.querySelector(
        'input[name="delivery-type"]:checked'
    )
    ?.value
    ||
    "delivery";

}


function deliveryFee() {

    if (
        currentDeliveryType()
        ===
        "pickup"
    ) {

        return 0;

    }


    if (
        cartSubtotal()
        >=
        CONFIG.freeShipping
    ) {

        return 0;

    }


    return CONFIG.deliveryFee;

}


function abrirCheckout() {

    if (
        cart.length === 0
    ) {

        showToast(
            t().emptyCart
        );


        return;

    }


    fecharCarrinho();


    checkoutStep =
        1;


    discount =
        0;


    document.getElementById(
        "coupon-input"
    ).value =
        "";


    document.getElementById(
        "coupon-message"
    ).textContent =
        "";


    updateCheckout();


    openOverlay(
        "checkout-overlay"
    );

}


function fecharCheckout() {

    closeOverlay(
        "checkout-overlay"
    );

}


function updateCheckout() {

    document
        .querySelectorAll(
            ".checkout-page"
        )
        .forEach(
            page => {

                page.classList
                    .toggle(
                        "active",
                        Number(
                            page.dataset.page
                        )
                        ===
                        checkoutStep
                    );

            }
        );


    document
        .querySelectorAll(
            ".checkout-step"
        )
        .forEach(
            step => {

                const number =
                    Number(
                        step.dataset.step
                    );


                step.classList
                    .toggle(
                        "active",
                        number ===
                        checkoutStep
                    );


                step.classList
                    .toggle(
                        "complete",
                        number <
                        checkoutStep
                    );

            }
        );


    const back =
        document.getElementById(
            "checkout-back"
        );


    back.style.opacity =
        checkoutStep === 1
            ?
            ".35"
            :
            "1";


    const next =
        document.getElementById(
            "checkout-next"
        );


    next.textContent =
        checkoutStep < 3
            ?
            t().continue
            :
            t().finishOrder;


    const subtotal =
        cartSubtotal();


    const fee =
        deliveryFee();


    const discountValue =
        subtotal
        *
        discount;


    const total =
        subtotal
        -
        discountValue
        +
        fee;


    document.getElementById(
        "checkout-subtotal"
    ).textContent =
        money(
            subtotal
        );


    document.getElementById(
        "checkout-delivery"
    ).textContent =
        fee === 0
            ?
            t().free
            :
            money(
                fee
            );


    document.getElementById(
        "checkout-discount"
    ).textContent =
        `- ${money(
            discountValue
        )}`;


    document.getElementById(
        "discount-row"
    )
    .classList
    .toggle(
        "hidden",
        discount === 0
    );


    document.getElementById(
        "checkout-total"
    ).textContent =
        money(
            total
        );


    const shippingMessage =
        document.getElementById(
            "shipping-message"
        );


    if (
        currentDeliveryType()
        ===
        "pickup"
    ) {

        shippingMessage.textContent =
            t().noDeliveryFee;

    }

    else if (
        subtotal >=
        CONFIG.freeShipping
    ) {

        shippingMessage.textContent =
            t().freeShippingUnlocked;

    }

    else {

        shippingMessage.textContent =
            t()
                .addForFreeShipping
                .replace(
                    "{value}",
                    money(
                        CONFIG.freeShipping
                        -
                        subtotal
                    )
                );

    }

}


function checkoutProximo() {

    if (
        checkoutStep === 1
    ) {

        checkoutStep =
            2;


        updateCheckout();

        return;

    }


    if (
        checkoutStep === 2
    ) {

        if (
            !validateCheckout()
        ) {

            return;

        }


        checkoutStep =
            3;


        updateCheckout();

        return;

    }


    finalizarPedido();

}


function checkoutAnterior() {

    if (
        checkoutStep <= 1
    ) {

        return;

    }


    checkoutStep--;


    updateCheckout();

}


function validateCheckout() {

    const name =
        document.getElementById(
            "client-name"
        )
        .value
        .trim();


    const phone =
        document.getElementById(
            "client-phone"
        )
        .value
        .replace(
            /\D/g,
            ""
        );


    if (
        !name
        ||
        phone.length < 10
    ) {

        showToast(
            t().requiredFields
        );


        return false;

    }


    if (
        currentDeliveryType()
        ===
        "delivery"
    ) {

        const address =
            document.getElementById(
                "client-address"
            )
            .value
            .trim();


        const number =
            document.getElementById(
                "client-number"
            )
            .value
            .trim();


        const neighborhood =
            document.getElementById(
                "client-neighborhood"
            )
            .value
            .trim();


        if (
            !address
            ||
            !number
            ||
            !neighborhood
        ) {

            showToast(
                t().requiredFields
            );


            return false;

        }

    }


    return true;

}


function aplicarCupom() {

    const value =
        document.getElementById(
            "coupon-input"
        )
        .value
        .trim()
        .toUpperCase();


    const message =
        document.getElementById(
            "coupon-message"
        );


    if (
        value ===
        "ROGE10"
    ) {

        discount =
            .10;


        message.textContent =
            t().couponApplied;


        message.style.color =
            "#69d58d";

    }

    else {

        discount =
            0;


        message.textContent =
            t().invalidCoupon;


        message.style.color =
            "#ee6268";

    }


    updateCheckout();

}


function finalizarPedido() {

    const subtotal =
        cartSubtotal();


    if (
        subtotal <
        CONFIG.minimumOrder
    ) {

        showToast(
            `${
                language === "pt"
                    ?
                    "Pedido mínimo"
                    :
                    "Minimum order"
            }: ${money(CONFIG.minimumOrder)}`
        );


        return;

    }


    const total =
        subtotal
        -
        subtotal
        *
        discount
        +
        deliveryFee();


    document.getElementById(
        "success-total"
    ).textContent =
        money(
            total
        );


    fecharCheckout();


    openOverlay(
        "order-success"
    );

}


function fecharSucessoPedido() {

    closeOverlay(
        "order-success"
    );


    cart =
        [];


    discount =
        0;


    saveState();

    renderCart();

    updateCart();

}


function setupDelivery() {

    document
        .querySelectorAll(
            'input[name="delivery-type"]'
        )
        .forEach(
            input => {

                input.addEventListener(
                    "change",
                    () => {

                        document
                            .querySelectorAll(
                                ".delivery-option"
                            )
                            .forEach(
                                option =>
                                    option
                                        .classList
                                        .remove(
                                            "active"
                                        )
                            );


                        input
                            .closest(
                                ".delivery-option"
                            )
                            .classList
                            .add(
                                "active"
                            );


                        document.getElementById(
                            "address-fields"
                        ).style.display =
                            input.value
                            ===
                            "pickup"
                                ?
                                "none"
                                :
                                "grid";


                        updateCheckout();

                    }
                );

            }
        );


    document
        .querySelectorAll(
            'input[name="payment"]'
        )
        .forEach(
            input => {

                input.addEventListener(
                    "change",
                    () => {

                        document.getElementById(
                            "change-field"
                        )
                        .classList
                        .toggle(
                            "show",
                            input.value ===
                            "cash"
                        );

                    }
                );

            }
        );

}


function setupReservation() {

    const form =
        document.getElementById(
            "reservation-form"
        );


    const date =
        document.getElementById(
            "reservation-date"
        );


    date.min =
        new Date()
            .toISOString()
            .split(
                "T"
            )[0];


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "reservation-name"
                )
                .value
                .trim();


            const dateValue =
                date.value;


            const time =
                document.getElementById(
                    "reservation-time"
                )
                .value;


            const people =
                document.getElementById(
                    "reservation-people"
                )
                .value;


            if (
                !name
                ||
                !dateValue
                ||
                !time
                ||
                !people
            ) {

                showToast(
                    t().requiredFields
                );


                return;

            }


            const formatted =
                new Date(
                    `${dateValue}T12:00:00`
                )
                .toLocaleDateString(
                    language === "pt"
                        ?
                        "pt-BR"
                        :
                        "en-US"
                );


            document.getElementById(
                "reservation-success-text"
            ).textContent =
                language === "pt"
                    ?
                    `${name}, sua solicitação foi registrada para ${formatted}, às ${time}, para ${people} pessoa(s).`
                    :
                    `${name}, your request was registered for ${formatted} at ${time} for ${people} guest(s).`;


            openOverlay(
                "reservation-success"
            );


            form.reset();


            document.getElementById(
                "reservation-counter"
            ).textContent =
                "0 / 150";

        }
    );

}


function fecharReservaSucesso() {

    closeOverlay(
        "reservation-success"
    );

}


function renderReview() {

    const review =
        reviews[
            reviewIndex
        ][
            language
        ];


    document.getElementById(
        "review-text"
    ).textContent =
        `“${review.text}”`;


    document.getElementById(
        "review-name"
    ).textContent =
        review.name;


    document.getElementById(
        "review-role"
    ).textContent =
        review.role;


    document.getElementById(
        "review-dots"
    ).innerHTML =
        reviews
            .map(
                (
                    _,
                    index
                ) =>
                    `
                    <span
                        class="review-dot ${
                            index ===
                            reviewIndex
                                ?
                                "active"
                                :
                                ""
                        }"
                    ></span>
                    `
            )
            .join("");

}


function mudarReview(
    direction
) {

    reviewIndex +=
        direction;


    if (
        reviewIndex < 0
    ) {

        reviewIndex =
            reviews.length
            -
            1;

    }


    if (
        reviewIndex >=
        reviews.length
    ) {

        reviewIndex =
            0;

    }


    renderReview();

}


function abrirGaleria(
    button
) {

    const image =
        button.querySelector(
            "img"
        );


    const lightboxImage =
        document.getElementById(
            "lightbox-image"
        );


    lightboxImage.src =
        image.src;


    lightboxImage.alt =
        image.alt;


    openOverlay(
        "lightbox"
    );

}


function fecharGaleria() {

    closeOverlay(
        "lightbox"
    );

}


function avisoWhatsApp() {

    showToast(
        language === "pt"
            ?
            "WhatsApp do ROGE Sushi em configuração."
            :
            "ROGE Sushi WhatsApp is being configured."
    );

}


function avisoInstagram() {

    showToast(
        language === "pt"
            ?
            "Instagram oficial do ROGE Sushi em breve."
            :
            "ROGE Sushi official Instagram coming soon."
    );

}


function irParaBusca() {

    document.getElementById(
        "cardapio"
    )
    .scrollIntoView(
        {
            behavior:
                "smooth"
        }
    );


    setTimeout(
        () => {

            document.getElementById(
                "menu-search"
            )
            .focus();

        },
        550
    );

}


function setupMenu() {

    const button =
        document.getElementById(
            "menu-button"
        );


    const menu =
        document.getElementById(
            "mobile-menu"
        );


    button.addEventListener(
        "click",
        () => {

            const open =
                !menu
                    .classList
                    .contains(
                        "open"
                    );


            menu.classList
                .toggle(
                    "open",
                    open
                );


            menu.setAttribute(
                "aria-hidden",
                String(
                    !open
                )
            );


            button.setAttribute(
                "aria-expanded",
                String(
                    open
                )
            );


            document.body
                .classList
                .toggle(
                    "lock",
                    open
                );

        }
    );

}


function fecharMenu() {

    const menu =
        document.getElementById(
            "mobile-menu"
        );


    const button =
        document.getElementById(
            "menu-button"
        );


    menu.classList
        .remove(
            "open"
        );


    menu.setAttribute(
        "aria-hidden",
        "true"
    );


    button.setAttribute(
        "aria-expanded",
        "false"
    );


    releaseScroll();

}


function setupFaq() {

    document
        .querySelectorAll(
            ".faq-item"
        )
        .forEach(
            item => {

                item.querySelector(
                    "button"
                )
                .addEventListener(
                    "click",
                    () => {

                        const open =
                            item
                                .classList
                                .contains(
                                    "open"
                                );


                        document
                            .querySelectorAll(
                                ".faq-item"
                            )
                            .forEach(
                                faq =>
                                    faq
                                        .classList
                                        .remove(
                                            "open"
                                        )
                            );


                        if (!open) {

                            item.classList
                                .add(
                                    "open"
                                );

                        }

                    }
                );

            }
        );

}


function setupReveal() {

    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        )
        .matches
    ) {

        document
            .querySelectorAll(
                ".reveal"
            )
            .forEach(
                element =>
                    element.classList
                        .add(
                            "visible"
                        )
            );


        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add(
                                    "visible"
                                );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold:
                    .1
            }
        );


    document
        .querySelectorAll(
            ".reveal"
        )
        .forEach(
            element =>
                observer.observe(
                    element
                )
        );

}


function setupScroll() {

    const header =
        document.getElementById(
            "header"
        );


    const progress =
        document.getElementById(
            "scroll-progress"
        );


    const backTop =
        document.getElementById(
            "back-top"
        );


    const heroBackground =
        document.querySelector(
            ".hero-background"
        );


    function update() {

        const y =
            window.scrollY;


        header.classList
            .toggle(
                "scrolled",
                y > 40
            );


        backTop.classList
            .toggle(
                "show",
                y > 700
            );


        const max =
            document.documentElement
                .scrollHeight
            -
            window.innerHeight;


        progress.style.width =
            `${
                max > 0
                    ?
                    y /
                    max
                    *
                    100
                    :
                    0
            }%`;


        if (
            heroBackground
            &&
            !window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {

            heroBackground.style.transform =
                `translateY(${y * .06}px) scale(1.04)`;

        }

    }


    window.addEventListener(
        "scroll",
        update,
        {
            passive:
                true
        }
    );


    update();

}


function setupTheme() {

    document.getElementById(
        "theme-toggle"
    )
    .addEventListener(
        "click",
        () => {

            theme =
                theme === "dark"
                    ?
                    "light"
                    :
                    "dark";


            saveState();

            applyTheme();

        }
    );

}


function setupCounters() {

    const fields =
        [
            [
                "reservation-notes",
                "reservation-counter",
                150
            ],

            [
                "modal-observation",
                "modal-counter",
                100
            ]
        ];


    fields.forEach(
        (
            [
                inputId,
                counterId,
                max
            ]
        ) => {

            const input =
                document.getElementById(
                    inputId
                );


            const counter =
                document.getElementById(
                    counterId
                );


            input.addEventListener(
                "input",
                () => {

                    counter.textContent =
                        `${input.value.length} / ${max}`;

                }
            );

        }
    );

}


function setupPhoneMasks() {

    [
        "reservation-phone",
        "client-phone"
    ]
    .forEach(
        id => {

            const input =
                document.getElementById(
                    id
                );


            input.addEventListener(
                "input",
                event => {

                    let value =
                        event.target.value
                        .replace(
                            /\D/g,
                            ""
                        )
                        .slice(
                            0,
                            11
                        );


                    if (
                        value.length > 2
                    ) {

                        value =
                            `(${value.slice(0, 2)}) ${value.slice(2)}`;

                    }


                    if (
                        value.length > 10
                    ) {

                        value =
                            `${value.slice(0, 10)}-${value.slice(10)}`;

                    }


                    event.target.value =
                        value;

                }
            );

        }
    );

}


function openOverlay(
    id
) {

    document.getElementById(
        id
    )
    .classList
    .add(
        "open"
    );


    document.body
        .classList
        .add(
            "lock"
        );

}


function closeOverlay(
    id
) {

    document.getElementById(
        id
    )
    .classList
    .remove(
        "open"
    );


    releaseScroll();

}


function releaseScroll() {

    const open =
        document.querySelector(
            ".modal-overlay.open, .drawer-overlay.open, .checkout-overlay.open, .success-overlay.open, .lightbox.open, .mobile-menu.open"
        );


    if (!open) {

        document.body
            .classList
            .remove(
                "lock"
            );

    }

}


function setupBackdrops() {

    const overlays =
        [
            [
                "product-modal",
                fecharProduto
            ],

            [
                "cart-overlay",
                fecharCarrinho
            ],

            [
                "checkout-overlay",
                fecharCheckout
            ],

            [
                "order-success",
                fecharSucessoPedido
            ],

            [
                "reservation-success",
                fecharReservaSucesso
            ],

            [
                "lightbox",
                fecharGaleria
            ]
        ];


    overlays.forEach(
        (
            [
                id,
                fn
            ]
        ) => {

            const element =
                document.getElementById(
                    id
                );


            element.addEventListener(
                "click",
                event => {

                    if (
                        event.target ===
                        element
                    ) {

                        fn();

                    }

                }
            );

        }
    );

}


function setupEscape() {

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !==
                "Escape"
            ) {

                return;

            }


            document
                .querySelectorAll(
                    ".open"
                )
                .forEach(
                    element => {

                        if (
                            element.classList
                                .contains(
                                    "mobile-menu"
                                )
                            ||
                            element.classList
                                .contains(
                                    "modal-overlay"
                                )
                            ||
                            element.classList
                                .contains(
                                    "drawer-overlay"
                                )
                            ||
                            element.classList
                                .contains(
                                    "checkout-overlay"
                                )
                            ||
                            element.classList
                                .contains(
                                    "success-overlay"
                                )
                            ||
                            element.classList
                                .contains(
                                    "lightbox"
                                )
                        ) {

                            element.classList
                                .remove(
                                    "open"
                                );

                        }

                    }
                );


            releaseScroll();

        }
    );

}


let toastTimer;


function showToast(
    message
) {

    const toast =
        document.getElementById(
            "toast"
        );


    const text =
        document.getElementById(
            "toast-text"
        );


    text.textContent =
        message;


    clearTimeout(
        toastTimer
    );


    toast.classList
        .add(
            "show"
        );


    toastTimer =
        setTimeout(
            () => {

                toast.classList
                    .remove(
                        "show"
                    );

            },
            2100
        );

}


document.addEventListener(
    "DOMContentLoaded",
    () => {

        document.getElementById(
            "product-total"
        ).textContent =
            `${products.length}+`;


        applyTheme();


        showSkeleton();


        setTimeout(
            () => {

                applyLanguage();

                renderPopular();

                renderProducts();

                renderCart();

                updateCart();

                renderReview();

            },
            300
        );


        setupFilters();

        setupDelivery();

        setupReservation();

        setupMenu();

        setupFaq();

        setupReveal();

        setupScroll();

        setupTheme();

        setupCounters();

        setupPhoneMasks();

        setupBackdrops();

        setupEscape();

        startLoader();

    }
);