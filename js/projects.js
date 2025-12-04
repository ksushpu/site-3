class ProjectsFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');
        this.init();
    }

    init() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleFilterClick(e.target);
            });
        });

        const projectButtons = document.querySelectorAll('.project-btn');
        projectButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const filePath = button.getAttribute('data-file');
                if (filePath) {
                    window.open(filePath, '_blank');
                }
            });
        });
    }

    handleFilterClick(button) {
        const filter = button.getAttribute('data-filter');

        this.filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        this.filterProjects(filter);
    }

    filterProjects(filter) {
        this.projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.3s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.classList.add('hidden');
                }, 300);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ProjectsFilter();
});