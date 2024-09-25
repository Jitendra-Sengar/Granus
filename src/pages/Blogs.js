import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const blogPosts = [
  {
    title: 'How to Improve Your Online Presence',
    excerpt: 'Learn effective strategies to enhance your online presence and attract more customers.',
    image: '/images/blog1.jpg', // Path to your blog image
    date: 'September 15, 2024',
    link: '/blog/how-to-improve-your-online-presence'
  },
  {
    title: 'Top 10 Tips for Effective Digital Marketing',
    excerpt: 'Discover the top ten tips to boost your digital marketing efforts and achieve better results.',
    image: '/images/blog2.jpg', // Path to your blog image
    date: 'September 22, 2024',
    link: '/blog/top-10-tips-for-effective-digital-marketing'
  },
  {
    title: 'The Future of Web Development',
    excerpt: 'Explore the emerging trends and technologies shaping the future of web development.',
    image: '/images/blog3.jpg', // Path to your blog image
    date: 'September 29, 2024',
    link: '/blog/the-future-of-web-development'
  },
  // Add more blog posts as needed
];

const Blogs = () => {
  return (
    <div className="section-padding-top">
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <Container>
          <h1>Our Blog</h1>
          <p>Stay updated with the latest news, tips, and insights from our industry experts.</p>
        </Container>
      </header>

      {/* Blog Posts Section */}
      <section id="blog-posts" className="py-5">
        <Container>
          <Row>
            {blogPosts.map((post, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={post.image} alt={post.title} />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                    <Card.Text>
                      {post.excerpt}
                    </Card.Text>
                    <Button variant="primary" href={post.link}>Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Blogs;
