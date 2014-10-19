class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :edit, :update, :destroy]

  # GET /orders
  # GET /orders.json
  def index
    @orders = Order.all
  end

  # GET /orders/1
  # GET /orders/1.json
  def show
    @order = Order.find(params[:id])
    @type = @order.order
    @name = @order.name
    @coffee = @order.coffee
  end

  # GET /orders/new
  def new
    @order = Order.new
  end

  # GET /orders/1/edit
  def edit
  end

  # POST /orders
  # POST /orders.json
  def create
    # @order = Order.new(order_params)

    # respond_to do |format|
    #   if @order.save
    #     format.html { redirect_to @order, notice: 'Order was successfully created.' }
    #     format.json { render :show, status: :created, location: @order }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @order.errors, status: :unprocessable_entity }
    #   end
    # end
    @iced= params[:icedcoffee]
    @baby= params[:baby]
    @decaf= params[:decaf]
    @other= params[:other]
    @param = ""
    # @test.each do |type|
    #   puts type
    # end
    if @iced
      @param = 'Iced'
    elsif @baby
      @param = 'Baby Size'
    elsif @decaf
      @param = 'Decaf'
    elsif @other
      @param = 'Hot'
    end

    puts "hehehehe #{@param}"
    @order = Order.create(:name => params[:hidden_name], :order => @param, :coffee => params[:hidden_coffee])

    redirect_to "/orders"
  end

  # PATCH/PUT /orders/1
  # PATCH/PUT /orders/1.json
  def update
    respond_to do |format|
      if @order.update(order_params)
        format.html { redirect_to @order, notice: 'Order was successfully updated.' }
        format.json { render :show, status: :ok, location: @order }
      else
        format.html { render :edit }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /orders/1
  # DELETE /orders/1.json
  def destroy_all
    Order.delete_all
  end

  def destroy
    @order.destroy
    respond_to do |format|
      format.html { redirect_to orders_url, notice: 'Order was successfully destroyed.' }
      format.js { render :nothing => true}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def order_params
      params.require(:order).permit(:name, :order)
    end
end
