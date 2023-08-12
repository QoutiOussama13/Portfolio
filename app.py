from flask import Flask, render_template, request

app = Flask(__name__)



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/pitch')
def contact():
    return render_template('pitch.html')

if __name__ == '__main__':
    app.run(debug=True)