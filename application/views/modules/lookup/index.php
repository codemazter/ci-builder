<div class="container">
	 <!-- main content -->
	 	
	 
	 <!-- row -->
	 <div class="row">	 
	 	<div class="span12">
			<h3>Gopi :: CI Builder</h3>
			Create online forms using CodeIgniter
		</div>
	 </div>
	 <!-- row end -->
	 
	 
	 <div class="page-header"><a href="<?=base_url('code_builder/create')?>" class="btn btn-primary">Create New Form</a></div>
	 
	 <!-- row -->
	<div class="row">
		<div class="span12">
			<div class="table-responsive" style="max-height: 320px; overflow-y:scroll; ">
				<table class="table table-hover">
				<thead> 
					<tr> 
						<th>#</th> 
						<th>Name</th> 
						<th>Description</th> 
						<th>Date</th> 
						<th>Action</th> 
					</tr> 
				</thead> 
				<tbody> 
				<?php $i=1; foreach ($fl->result() as $row):
					$df = new DateTime($row->fl_created_date);
				?>
					<tr> 
						<td><?=$i?></td> 
						<td><?=$row->fl_name?></td> 
						<td><?=$row->fl_des?></td> 
						<td><?=$df->format('d-m-Y')?></td> 
						<td>
							<a href="<?=base_url('code_builder/generate/'.$row->fl_ref)?>"> View</a> &nbsp;&nbsp;
							<a href="<?=base_url('code_builder/delete_form/'.$row->fl_ref)?>"> Delete</a>
						</td> 
					</tr>
				<?php $i++; endforeach; if($fl->num_rows()==0){?>
				<tr ><td colspan="5">Sorry! No results were found.</td></tr>
				<?php }?>
				</tbody> 
				</table>
			</div>
		</div>
	</div>
	 <!-- row end -->
	  <div class="page-header"></div>
<!-- end: main content -->     
</div>    