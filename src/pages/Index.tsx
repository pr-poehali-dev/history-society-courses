import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const courses = [
    {
      id: 1,
      title: 'История России: От древности до наших дней',
      description: 'Полный курс истории России с интерактивными материалами',
      duration: '12 недель',
      level: 'Средний',
      price: '15 000 ₽',
      icon: 'BookOpen'
    },
    {
      id: 2,
      title: 'Обществознание: Подготовка к ЕГЭ',
      description: 'Интенсивный курс для максимальных баллов на экзамене',
      duration: '8 недель',
      level: 'Продвинутый',
      price: '18 000 ₽',
      icon: 'GraduationCap'
    },
    {
      id: 3,
      title: 'Всемирная история: Ключевые события',
      description: 'Изучение важнейших исторических событий мировой истории',
      duration: '10 недель',
      level: 'Начальный',
      price: '12 000 ₽',
      icon: 'Globe'
    }
  ];

  const teachers = [
    {
      name: 'Алексей Петров',
      role: 'Историк, кандидат исторических наук',
      experience: '15 лет преподавания',
      courses: 'История России, Всемирная история'
    },
    {
      name: 'Мария Иванова',
      role: 'Специалист по обществознанию',
      experience: '10 лет подготовки к ЕГЭ',
      courses: 'Обществознание'
    },
    {
      name: 'Дмитрий Соколов',
      role: 'Историк, преподаватель МГУ',
      experience: '12 лет опыта',
      courses: 'Всемирная история'
    }
  ];

  const reviews = [
    {
      name: 'Анна Смирнова',
      role: 'Студентка',
      text: 'Отличная платформа! Подготовилась к ЕГЭ и получила 95 баллов. Преподаватели объясняют сложные темы простым языком.',
      rating: 5
    },
    {
      name: 'Иван Коваленко',
      role: 'Учащийся 10 класса',
      text: 'Курс истории России превзошёл все ожидания. Интересные материалы и увлекательная подача информации.',
      rating: 5
    },
    {
      name: 'Елена Морозова',
      role: 'Выпускница',
      text: 'Благодаря этим курсам я поступила на бюджет в университет. Спасибо преподавателям!',
      rating: 5
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/20">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="BookOpen" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ИсторияПро
              </h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('courses')} className="text-sm font-medium hover:text-primary transition-colors">
                Курсы
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
                О платформе
              </button>
              <button onClick={() => scrollToSection('teachers')} className="text-sm font-medium hover:text-primary transition-colors">
                Преподаватели
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
            </div>

            <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Войти
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Вход в систему</DialogTitle>
                  <DialogDescription>
                    Войдите или зарегистрируйтесь для доступа к курсам
                  </DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="login">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Вход</TabsTrigger>
                    <TabsTrigger value="register">Регистрация</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="login" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Пароль</Label>
                      <Input id="password" type="password" placeholder="••••••••" />
                    </div>
                    <Button className="w-full bg-primary">Войти</Button>
                  </TabsContent>
                  
                  <TabsContent value="register" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="role">Я...</Label>
                      <Tabs defaultValue="student" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="student">Студент</TabsTrigger>
                          <TabsTrigger value="teacher">Преподаватель</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-name">Имя</Label>
                      <Input id="reg-name" placeholder="Ваше имя" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-email">Email</Label>
                      <Input id="reg-email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-password">Пароль</Label>
                      <Input id="reg-password" type="password" placeholder="••••••••" />
                    </div>
                    <Button className="w-full bg-secondary">Зарегистрироваться</Button>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="py-20 px-4">
          <div className="container mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Изучай историю и обществознание онлайн
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Современная образовательная платформа с лучшими преподавателями и интерактивными материалами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8" onClick={() => scrollToSection('courses')}>
                <Icon name="Sparkles" className="mr-2" size={20} />
                Выбрать курс
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('about')}>
                Узнать больше
              </Button>
            </div>
          </div>
        </section>

        <section id="courses" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши курсы</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">Выберите курс, который подходит именно вам</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card key={course.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                      <Icon name={course.icon as any} className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="text-base">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" className="text-muted-foreground" size={16} />
                        <span className="text-sm">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{course.level}</Badge>
                        <span className="font-semibold text-lg ml-auto text-primary">{course.price}</span>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                        Записаться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">О платформе</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Target" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Наша миссия</CardTitle>
                  <CardDescription className="text-base">
                    Сделать качественное историческое и обществоведческое образование доступным каждому через современные технологии и методики преподавания.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-2 hover:border-secondary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Award" className="text-secondary" size={24} />
                  </div>
                  <CardTitle>Наши достижения</CardTitle>
                  <CardDescription className="text-base">
                    Более 5000 студентов, средний балл ЕГЭ наших выпускников - 87 баллов, 95% поступления в топовые вузы страны.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-2 hover:border-accent transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Zap" className="text-accent" size={24} />
                  </div>
                  <CardTitle>Современный подход</CardTitle>
                  <CardDescription className="text-base">
                    Интерактивные материалы, видеолекции, онлайн-тесты и персональная обратная связь от преподавателей.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Users" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Сообщество</CardTitle>
                  <CardDescription className="text-base">
                    Активное комьюнити студентов и преподавателей, совместное обучение и обмен знаниями.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="teachers" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши преподаватели</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">Профессионалы с многолетним опытом</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teachers.map((teacher, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <CardTitle className="text-xl">{teacher.name}</CardTitle>
                    <CardDescription className="text-sm font-medium">{teacher.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="Briefcase" className="text-muted-foreground" size={16} />
                        <span>{teacher.experience}</span>
                      </div>
                      <div className="text-muted-foreground">{teacher.courses}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы студентов</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">Что говорят наши выпускники</p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {reviews.map((review, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <CardDescription className="text-sm">{review.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground italic">"{review.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground mb-8">Остались вопросы? Мы всегда на связи!</p>
            
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" size={20} />
                    </div>
                    <span className="text-lg">info@historypro.ru</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Icon name="Phone" className="text-secondary" size={20} />
                    </div>
                    <span className="text-lg">+7 (495) 123-45-67</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="MapPin" className="text-accent" size={20} />
                    </div>
                    <span className="text-lg">Москва, ул. Тверская, 10</span>
                  </div>
                  
                  <div className="pt-4 flex gap-4 justify-center">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Send" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="MessageCircle" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Youtube" size={20} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="BookOpen" className="text-primary" size={28} />
            <h3 className="text-2xl font-bold">ИсторияПро</h3>
          </div>
          <p className="text-sm opacity-80">© 2024 ИсторияПро. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
