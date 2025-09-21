<?php

namespace App\Http\Controllers;

use App\Models\TaskManager;
use Illuminate\Http\Request;

class TaskManagerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        $tasks = TaskManager::orderBy('id', 'desc')->get();

        if ($tasks->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'Không tìm thấy công việc nào',
                "data" => []
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Lấy dữ liệu công việc thành công',
            'data' => $tasks,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        return TaskManager::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        return TaskManager::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $taskManager = TaskManager::findOrFail($id);
        $taskManager->update($request->all());

        return $taskManager;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $taskManager = TaskManager::find($id);

        if (!$taskManager) {
            return response()->json([
                'success' => false,
                'message' => 'Không tìm thấy công việc',
            ], 404);
        }

        $taskManager->delete();

        return response()->json([
            'success' => true,
            'message' => 'Xóa công việc thành công',
        ], 200);
    }

}
